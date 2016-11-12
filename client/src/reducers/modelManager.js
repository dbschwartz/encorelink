import { combineReducers } from 'redux';
import {
  API_ACTION_START,
  API_ACTION_SUCCESS,
  API_ACTION_FAIL
} from '../constants/reduxConstants';
import {
  FETCHING,
  CURRENT,
  FAILED
} from '../constants/modelStatus';

const initialModels = {};

function getModelNameFromUrl(url) {
  const urlParts = url.split('/');
  return urlParts[0]; // or 2
}

function updateModels(modelState, modelName, data) {
  const nextModelState = { ...modelState };
  const normalizedData = Array.isArray(data) ? data : [data];

  normalizedData.forEach(model => {
    nextModelState[model.id] = model;
  });

  return nextModelState;
}

// {
//   [id]: model
// }
function allModelsReducer(modelState = initialModels, action) {
  if (action.type === API_ACTION_SUCCESS) {
    const modelName = getModelNameFromUrl(action.meta.url);
    return updateModels(modelState, modelName, action.payload);
  }

  return modelState;
}

function setDbViewFetching(currentDbView) {
  return {
    ...currentDbView,
    status: FETCHING
  };
}

function setDbViewSuccess(dbViewsState, data) {
  const ids = Array.isArray(data) ? data.map(model => model.id) : data.id;
  return {
    ids,
    status: CURRENT
  };
}

function setDbViewFail(currentDbView) {
  return {
    ...currentDbView,
    status: FAILED
  };
}

function updateDbViews(updater, dbViewsState, action) {
  const { url } = action.meta;
  return {
    ...dbViewsState,
    [url]: updater(dbViewsState[url], action.payload)
  };
}

const initialDbViews = {};

// {
//  [url]: {
//    ids: [ids] | id,
//    status: STALE | FETCHING | CURRENT | FAILED
//  }
// }
function dbViewsReducer(dbViewsState = initialDbViews, action) {
  switch (action.type) {
    case API_ACTION_START:
      return updateDbViews(setDbViewFetching, dbViewsState, action);

    case API_ACTION_SUCCESS:
      return updateDbViews(setDbViewSuccess, dbViewsState, action);

    case API_ACTION_FAIL:
      return updateDbViews(setDbViewFail, dbViewsState, action);

    default:
      return dbViewsState;
  }
}

export default combineReducers({
  allModels: allModelsReducer,
  dbViews: dbViewsReducer
});


// Selectors

function hydrateModels(allModels, ids) {
  if (Array.isArray(ids)) {
    return ids.reduce((models, id) => {
      models.push(allModels[id]);
      return models;
    }, []);
  }
  return allModels[ids];
}

export function getModels(state, url) {
  const dbView = state.modelManager.dbViews[url];

  if (!dbView || dbView.ids === undefined) {
    return undefined;
  }

  const { allModels } = state.modelManager;
  return hydrateModels(allModels, dbView.ids);
}

export function getDbViewStatus(state, url) {
  const dbView = state.modelManager.dbViews[url];
  return dbView && dbView.status;
}

export const dbViewIsFetching = (state, url) => getDbViewStatus(state, url) === FETCHING;

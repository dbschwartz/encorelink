import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';

class MusicanProfile extends React.Component {
  static propTypes = {
    errorMessage: PropTypes.string
  };

  render() {
    return (
      <div className="row">
        <div className="small-12 columns">
          <h1>Create Your Profile</h1>

          <form className="form-create-event" onSubmit={this.handleFormSubmit}>
            <div className="small-7 small-offset-2 columns">
              <label>Phone Number:
                <input type="phone" placeholder="(xxx)-xxx-xxx" onChange={this.handleMusicianPhoneChange} required />
              </label>
            </div>

            <div className="small-5 small-offset-2 columns">
              <label>Date of Birth:
                <input type="date" placeholder="mm-dd-yyyy" onChange={this.handleMusicianDOBChange} required />
              </label>
            </div>

            <div className="small-9 small-offset-2 columns">
              <label>Home City, State/ Zipcode:
                <input type="text" onChange={this.handleMusicianAddressChange} required />
              </label>
            </div>

            <div className="small-5 small-offset-2 columns">
              <label htmlFor="musicianProfilePicture" className="button"><i className="torso"> Upload File</i></label>
              <input type="file" id="musicianProfilePicture" className="show-for-sr" />
            </div>

            <div className="small-5 small-offset-2 columns">
              <label>Education:
                <input type="text" onChange={this.handleMusicianEducationChange} required />
              </label>
            </div>

            <div className="small-5 small-offset-2 columns">
              <label>University/Convervatory:
                <input type="text" onChange={this.handleMusicianUniversityChange} required />
              </label>
            </div>

            <div className="small-12 small-offset-2 columns">
              <div className="row">
                <div className="small-12 medium-7 columns">
                  <label>Degree:
                    <input type="text" onChange={this.handleMusicianDegreeChange} required />
                  </label>
                </div>
                <div className="small-12 medium-5 columns">
                  <label>Major:
                    <input type="text" onChange={this.handleMusicianMajorChange} required />
                  </label>
                </div>
              </div>
            </div>

            <div className="small-12 small-offset-2 columns">
              <label>Year:</label>
              <label htmlFor="isFreshman"><input type="radio" name="isFreshman" onChange={this.handleIsFreshmanChange} value="freshman" id="isFreshman" />Freshman</label>
              <label htmlFor="isSophmore"><input type="radio" name="isSophmore" onChange={this.handleIsSophmoreChange} value="sophomore" id="isSophmore" />Sophomore</label>
              <label htmlFor="isJunior"><input type="radio" name="isJunior" onChange={this.handleIsJuniorChange} value="junior" id="isJunior" />Junior</label>
              <label htmlFor="isSenior"><input type="radio" name="isSenior" onChange={this.handleIsSeniorChange} value="senior" id="isSenior" />Senior</label>
              <label htmlFor="isMaster"><input type="radio" name="isMaster" onChange={this.handleIsMasterChange} value="master" id="isMaster" />Master</label>
              <label htmlFor="isDoctoral"><input type="radio" name="isDoctoral" onChange={this.handleIsDoctoralChange} value="Doctoral" id="isDoctoral" />Doctoral</label>
              <label htmlFor="isAlumni"><input type="radio" name="isAlumni" onChange={this.handleIsAlumniChange} value="alumni" id="isAlumni" />Alumni</label>

              <div>
                <p>[+] (Add another education institution/degree)</p>
              </div>
            </div>

            <div className="small-12 small-offset-2 columns">
              <div>
                <h3>About your music You share:</h3>
              </div>
            </div>

            <div className="small-5 small-offset-2 columns">
              <div>
                <label>Major instrument(s):</label>
                <input type="text" onChange={this.handleInstrument} />
              </div>
            </div>

            <div className="small-12 small-offset-2 columns">
              <label>Genre/Style:</label>
              <label htmlFor="isClassical"><input type="checkbox" name="isClassical" onChange={this.handleIsClassicalChange} value="classical" id="isClassical" />Classical</label>
              <label htmlFor="isJazz"><input type="checkbox" name="isJazz" onChange={this.handleIsJazzChange} value="jazz" id="isJazz" />Jazz</label>
              <label htmlFor="isCountry"><input type="checkbox" name="isCountry" onChange={this.handleIsCountryChange} value="country" id="isCountry" />Country</label>
              <label htmlFor="isBlue"><input type="checkbox" name="isBlue" onChange={this.handleIsBlueChange} value="blue" id="isBlue" />Blue</label>
              <label htmlFor="is30s"><input type="checkbox" name="is30s" onChange={this.handleIs30sChange} value="30s" id="is30s" />30s</label>
              <label htmlFor="is40s"><input type="checkbox" name="is40s" onChange={this.handleIs40sChange} value="40s" id="is40s" />40s</label>
              <label htmlFor="is50s"><input type="checkbox" name="is50s" onChange={this.handleIs50sChange} value="50s" id="is50s" />50s</label>
              <label htmlFor="is60s"><input type="checkbox" name="is60s" onChange={this.handleIs60sChange} value="60s" id="is60s" />60s</label>
              <label htmlFor="isWorldMusic"><input type="checkbox" name="isWorldMusic" onChange={this.handleIsWorldMusicChange} value="worldMusic" id="isWorldMusic" />World Music</label>
              <label htmlFor="isOthersGenre"><input type="checkbox" name="isOthersGenre" onChange={this.handleIsOthersGenreChange} value="othersGenre" id="isOthersGenre" />Others</label>
            </div>

            <div className="small-12 columns">
              <label>Why Do you want to volunteer:</label>
              <label htmlFor="isShareMusic"><input type="checkbox" name="isShareMusic" onChange={this.handleIsShareMusicChange} value="shareMusic" id="isShareMusic" />Share music</label>
              <label htmlFor="isGrainExperience"><input type="checkbox" name="isGrainExperience" onChange={this.handleIsGrainExperienceChange} value="grainExperience" id="isGrainExperience" />Grain performance experience</label>
              <label htmlFor="isTeacherSuggestion"><input type="checkbox" name="isTeacherSuggestion" onChange={this.handleIsTeacherSuggestionChange} value="teacherSuggestion" id="isTeacherSuggestion" />Teacher suggestion</label>
              <label htmlFor="isEnsentiveRequireents"><input type="checkbox" name="isEnsentiveRequireents" onChange={this.handleIsEnsentiveRequireentsChange} value="ensentiveRequireents" id="isEnsentiveRequireents" />Ensentive requireents</label>
              <label htmlFor="isCurious"><input type="checkbox" name="isCurious" onChange={this.handleIsCuriousChange} value="curious" id="isCurious" />Curious about the organization</label>
              <label htmlFor="isOtherReason"><input type="checkbox" name="isOtherReason" onChange={this.handleIsOtherReasonChange} value="otherReason" id="isOtherReason" />Other</label>
            </div>

            <div className="small-12 columns">
              <label>Video or Audio file link:</label>
              <div className="input-group">
                <input className="input-group-field" type="number" />
                <div className="input-group-button">
                  <input type="submit" className="button" value="Upload Link" />
                </div>
              </div>
            </div>

            <div className="small-8 columns">
              <label>Profile:</label>
              <textarea onChange={this.handleIsProfile} />
            </div>

            <div className="small-12 medium-12 columns">
              <button type="submit" className="button">Save Changes</button>
            </div>
          </form>
          <div>
            <span>{this.props.errorMessage}</span>
          </div>
        </div>
      </div>
    );
  }
}


export default withRouter(MusicanProfile);

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
            <div className="small-12 medium-12 columns">
              <label>Phone Number:
                <input type="phone" placeholder="(xxx)-xxx-xxx" onChange={this.handleMusicianPhoneChange} required />
              </label>
            </div>

            <div className="small-12 medium-5 columns">
              <label>Date of Birth:
                <input type="date" placeholder="mm-dd-yyyy" onChange={this.handleMusicianDOBChange} required />
              </label>
            </div>

            <div className="small-12 medium-12 columns">
              <label>Home City, State/ Zipcode:
                <input type="text" onChange={this.handleMusicianAddressChange} required />
              </label>
            </div>

            <label htmlFor="musicianProfilePicture" className="button">Upload File</label>
            <input type="file" id="musicianProfilePicture" className="show-for-sr" />

            <div className="small-12 medium-5 columns">
              <label>Education:
                <input type="text" onChange={this.handleMusicianEducationChange} required />
              </label>
            </div>

            <div className="small-12 medium-5 columns">
              <label>University/Convervatory:
                <input type="text" onChange={this.handleMusicianUniversityChange} required />
              </label>
            </div>

            <div className="small-12 medium-7 columns">
              <div className="small-12 medium-12 columns">
                <label>Degreee:
                  <input type="text" onChange={this.handleMusicianDegreeChange} required />
                </label>
              </div>
            </div>

            <div className="small-12 medium-3 columns">
              <div className="small-12 medium-12 columns">
                <label>Major:
                  <input type="text" onChange={this.handleMusicianMajorChange} required />
                </label>
              </div>
            </div>

            <div className="small-12 medium-12 columns">
              <label>Year:</label>
              <input type="radio" name="isFreshman" onChange={this.handleIsFreshmanChange} value="freshman" id="isFreshman" /><label htmlFor="isFreshman">Freshman</label>
              <input type="radio" name="isSophmore" onChange={this.handleIsSophmoreChange} value="sophomore" id="isSophmore" /><label htmlFor="isSophmore">Sophomore</label>
              <input type="radio" name="isJunior" onChange={this.handleIsJuniorChange} value="junior" id="isJunior" /><label htmlFor="isJunior">Junior</label>
              <input type="radio" name="isSenior" onChange={this.handleIsSeniorChange} value="senior" id="isSenior" /><label htmlFor="isSenior">Senior</label>
              <input type="radio" name="isMaster" onChange={this.handleIsMasterChange} value="master" id="isMaster" /><label htmlFor="isMaster">Master</label>
              <input type="radio" name="isDoctoral" onChange={this.handleIsDoctoralChange} value="Doctoral" id="isDoctoral" /><label htmlFor="isDoctoral">Doctoral</label>
              <input type="radio" name="isAlumni" onChange={this.handleIsAlumniChange} value="alumni" id="isAlumni" /><label htmlFor="isAlumni">Alumni</label>
            </div>

            <div>
              <p>[+] (Add another education institution/degree)</p>
            </div>

            <div>
              <h2>About your music You share:</h2>
            </div>

            <div>
              <label>Major instrument(s):</label>
              <input type="text" onChange={this.handleInstrument} />
            </div>

            <div className="small-12 medium-12 rows">
              <label>Genre/Style:</label>
              <input type="checkbox" name="isClassical" onChange={this.handleIsClassicalChange} value="classical" id="isClassical" /><label htmlFor="isClassical">Classical</label>
              <input type="checkbox" name="isJazz" onChange={this.handleIsJazzChange} value="jazz" id="isJazz" /><label htmlFor="isJazz">Jazz</label>
              <input type="checkbox" name="isCountry" onChange={this.handleIsCountryChange} value="country" id="isCountry" /><label htmlFor="isCountry">Country</label>
              <input type="checkbox" name="isBlue" onChange={this.handleIsBlueChange} value="blue" id="isBlue" /><label htmlFor="isBlue">Blue</label>
              <input type="checkbox" name="is30s" onChange={this.handleIs30sChange} value="30s" id="is30s" /><label htmlFor="is30s">30s</label>
              <input type="checkbox" name="is40s" onChange={this.handleIs40sChange} value="40s" id="is40s" /><label htmlFor="is40s">40s</label>
              <input type="checkbox" name="is50s" onChange={this.handleIs50sChange} value="50s" id="is50s" /><label htmlFor="is50s">50s</label>
              <input type="checkbox" name="is60s" onChange={this.handleIs60sChange} value="60s" id="is60s" /><label htmlFor="is60s">60s</label>
              <input type="checkbox" name="isWorldMusic" onChange={this.handleIsWorldMusicChange} value="worldMusic" id="isWorldMusic" /><label htmlFor="isWorldMusic">World Music</label>
              <input type="checkbox" name="isOthersGenre" onChange={this.handleIsOthersGenreChange} value="othersGenre" id="isOthersGenre" /><label htmlFor="isOthersGenre">Others</label>
            </div>

            <div className="small-12 medium-12 row">
              <label>Why Do you want to volunteer:</label>
              <input type="checkbox" name="isShareMusic" onChange={this.handleIsShareMusicChange} value="shareMusic" id="isShareMusic" /><label htmlFor="isShareMusic">Share music</label>
              <input type="checkbox" name="isGrainExperience" onChange={this.handleIsGrainExperienceChange} value="grainExperience" id="isGrainExperience" /><label htmlFor="isGrainExperience">Grain performance experience</label>
              <input type="checkbox" name="isTeacherSuggestion" onChange={this.handleIsTeacherSuggestionChange} value="teacherSuggestion" id="isTeacherSuggestion" /><label htmlFor="isTeacherSuggestion">Teacher suggestion</label>
              <input type="checkbox" name="isEnsentiveRequireents" onChange={this.handleIsEnsentiveRequireentsChange} value="ensentiveRequireents" id="isEnsentiveRequireents" /><label htmlFor="isEnsentiveRequireents">Ensentive requireents</label>
              <input type="checkbox" name="isCurious" onChange={this.handleIsCuriousChange} value="curious" id="isCurious" /><label htmlFor="isCurious">Curious about the organization</label>
              <input type="checkbox" name="isOtherReason" onChange={this.handleIsOtherReasonChange} value="otherReason" id="isOtherReason" /><label htmlFor="isOtherReason">Other</label>
            </div>
        
            <div>
              <label>Video or Audio file link:</label>
              <input type="text" onChange={this.handleSampleFileLinkChange} required />
              <button type="upload" className="button">Upload</button>
              <input type="file" id="sampleFileLink" className="show-for-sr" />
            </div>

            <div className="small-12 medium-12 columns">
              <label>Profile:</label>
              <textarea onChange={this.handleIsProfile}></textarea>
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

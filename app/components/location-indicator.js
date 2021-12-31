import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class LocationIndicatorComponent extends Component {
  @service location;

  // when the coordinates change, call the location service to get the current city and country
  get city() {
    return this.location.getCurrentCity();
  }

  get country() {
    return this.location.getCurrentCountry();
  }
}
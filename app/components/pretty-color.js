import Component from '@glimmer/component';

export default class PrettyColorComponent extends Component {
  get style() {
    return `color: ${this.args.name}`;
  }
}

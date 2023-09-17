import {Fancybox} from '@fancyapps/ui';
import {disableScroll, enableScroll} from "./disableScroll";

export default function fancybox() {
  Fancybox.bind('[data-fancybox]', {
    Image: {
      zoom: false
    },
    on: {
      init() {
        disableScroll()
      },
      destroy() {
        enableScroll()
      }
    }
  })
}

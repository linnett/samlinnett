/**
 * @class modules.components.video-hero.video-hero
 *
 * ## Description
 * Background video hero
 *
*/
'use strict';

import backgroundVideo from 'backgroundVideo';

/**
 * @class videoHero
 * @param {object} options - overrides the defaults
 */
class videoHero {
    constructor(options) {
        this.defaults = {
            $video: $('.js-video-hero'),
            $videoWrap: $('.js-video-wrap'),
            $videoOuterWrap: $('.js-video-outer'),
            $videoHeroContent: $('.video-hero__content'),
            $window: $(window)
        };

        this.options = $.extend(this.defaults, options);

        if(this.options.$video.length) {
            this.setAnimations();
            this.runBackgroundVideo();
        }
    }

    /**
     * Sets animations on the header
     *
     * @method setAnimations
     */
    setAnimations() {
        setTimeout(() => {
            this.options.$videoHeroContent.removeClass('video-hero__content--waiting');
        }, 2500);
    }

    /**
     * Starts the background video plugin
     *
     * @method runBackgroundVideo
     */
    runBackgroundVideo() {
        this.options.$video.backgroundVideo({
            $outerWrap: this.options.$window,
            $videoWrap: this.options.$videoWrap,
            parallaxOptions: {
                effect: 1.6
            }
        });
    }

}

export default videoHero;
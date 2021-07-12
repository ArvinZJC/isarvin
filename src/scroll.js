/*
 * @Description: methods controlling scroll behaviour
 * @Version: 1.0.1.20210712
 * @Author: Arvin Zhao
 * @Date: 2021-07-11 16:57:24
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-07-12 01:11:59
 */

export default {
    methods: {
        // Smooth scroll to the section specified by an anchor.
        navigate(anchor) {
            var element = document.querySelector(anchor);

            if (element) {
                window.scroll({
                    top: element.offsetTop - document.querySelector("#navbar").offsetHeight + 2, // Offset the top to avoid overlapping the fixed header and reduce errors for scrolling to the view.
                    left: 0,
                    behavior: "smooth"
                });
            }
			else {
                window.scroll({ top: 0, left: 0, behavior: "smooth" }); // Scroll to top if no such anchor.
            } // end if...else
		} // end function navigate
    }
};
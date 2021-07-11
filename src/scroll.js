/*
 * @Description: methods controlling scroll behaviour
 * @Version: 1.0.0.20210711
 * @Author: Arvin Zhao
 * @Date: 2021-07-11 16:57:24
 * @Last Editors: Arvin Zhao
 * @LastEditTime: 2021-07-11 23:06:40
 */

export default {
    methods: {
        // Smooth scroll to the section specified by an anchor.
        navigate(anchor) {
            var element = document.querySelector(anchor);

            if (element) {
                window.scroll({
                    top: element.offsetTop - document.querySelector("#navbar").offsetHeight, // Subtract the offset to avoid overlapping the fixed header.
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
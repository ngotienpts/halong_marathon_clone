document.addEventListener("DOMContentLoaded", function () {
    const tabOne = document.getElementById("tab-1");
    const tabTwo = document.getElementById("tab-2");
    const showPassContainer = document.querySelectorAll(
        ".js__showPassContainer"
    );

    function switchTab(tabId, idOne, idTwo) {
        document.getElementById(tabId).classList.add("active");
        document
            .getElementById(tabId === idOne ? idTwo : idOne)
            .classList.remove("active");

        document
            .getElementById("pane-" + tabId.split("-")[1])
            .classList.add("active");
        document
            .getElementById(
                "pane-" + tabId.split("-")[1] === "pane-" + idOne.split("-")[1]
                    ? "pane-" + idTwo.split("-")[1]
                    : "pane-" + idOne.split("-")[1]
            )
            .classList.remove("active");
    }

    const app = {
        // su ly cac su kien
        handleEvent: function () {
            const _this = this;
            // change tab
            if (tabOne) {
                tabOne.onclick = function () {
                    switchTab("tab-1", "tab-1", "tab-2");
                };
            }
            if (tabTwo) {
                tabTwo.onclick = function () {
                    switchTab("tab-2", "tab-2", "tab-1");
                };
            }

            // show password
            if (showPassContainer) {
                showPassContainer.forEach((item) => {
                    var showPass = item.querySelector(".show-pass");
                    var hidePass = item.querySelector(".hide-pass");
                    var input = item.querySelector("input[type='password']");

                    hidePass.onclick = function () {
                        this.style.display = "none";
                        showPass.style.display = "block";
                        if (input.getAttribute("type") === "password") {
                            input.setAttribute("type", "text");
                        }
                    };
                    showPass.onclick = function () {
                        this.style.display = "none";
                        hidePass.style.display = "block";
                        if (input.getAttribute("type") === "text") {
                            input.setAttribute("type", "password");
                        }
                    };
                });
            }

            // hide cac element khi click ra ngoai
            // document.addEventListener("click", function (e) {

            // });
        },

        // khoi tao function start
        start: function () {
            // su ly cac su kien
            this.handleEvent();
        },
    };

    app.start();
});

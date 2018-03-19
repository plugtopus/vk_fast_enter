chrome['browserAction']['onClicked'].addListener(
    function (activeTab) {
        var newURL = "https://vk.com/";
        chrome['tabs']['create']({url: newURL});
    }
);
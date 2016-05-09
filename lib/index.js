ons.platform.select('android');
ons.bootstrap()
    .controller('AppController', function() {
        this.title = 'Users';
        this.users = [{
            name: 'Diego Cornejo'
        }, {
            name: 'Erick Ruano'
        }, {
            name: 'Juan Acabal'
        }, {
            name: 'Random User'
        }];
        var options = {
            animation: 'slide'
        };

        this.login = function() {
            appNavigator
                .pushPage("home.html", options)
                .then(function() {
                    //                            ons.notification.alert('A new page is shown.');
                });
        };

        this.goToPage = function(user) {
            this.setUser = user;
            //                    var myNavigator = document.querySelector("#myNavigator");
            appNavigator
                .pushPage("page1.html", options)
                .then(function() {
                    //                            ons.notification.alert('A new page is shown.');
                });
        };
    
        this.logout = function() {
            var options = {
                animation: 'fade'
            };
            appNavigator
                .pushPage("login.html", options)
                .then(function() {
                    //                            ons.notification.alert('A new page is shown.');
                });
        };
    });
ons.ready(function() {
    console.log("Onsen UI is ready!");
});
$(function() {
    // OAuth.initialize('XzyB-KrFLOAfEKmVrBkRs9ERpSE');
    var githubUser;

    function githubViewModel() {
        // Data
        var self = this;
        self.githubUsername = ko.observable();

        // Operations

        $.getJSON("https://api.github.com/users/iambald", function(user) {
            githubUser = user;
            self.githubUsername(user.location);
            console.log(user.login);
        });
    }



    ko.applyBindings(githubViewModel, document.getElementById('github-card'));
});



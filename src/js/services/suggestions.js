app.factory('suggestions', [function() {
    var demoSuggestions = {
        posts: [
            {
                title: 'Free pizza at club meetings',
                upvotes: 15,
                comments: [
                    {
                        body: 'Bring soda too!!',
                        upvotes: 0,
                    },
                    {
                        body: 'What kind of pizza is it?',
                        upvotes: 0,
                    },
                    {
                        body: 'Is it gluten free?',
                        upvotes: 0,
                    },
                ],
            },
            {
                title: 'End all club emails with Laffy Taffy jokes',
                upvotes: 9,
                comments: [
                    {
                        body: 'Why Laffy Taffy? Let\'s use pizza jokes?',
                        upvotes: 0,
                    },
                    {
                        body: 'What kind of pizza jokes do you know?',
                        upvotes: 0,
                    },
                    {
                        body: 'Can we just end club emails without any jokes?...',
                        upvotes: 0,
                    },
                ],
            },
            {
                title: 'Retrofit water fountains with Gatorade',
                upvotes: 7,
                comments: [],
            },
            {
                title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through mettings',
                upvotes: 3,
                comments: [],
            },
        ]
    };
    return demoSuggestions;
}]);
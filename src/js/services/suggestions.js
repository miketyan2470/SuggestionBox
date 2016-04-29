app.factory('suggestions', [function() {
    var demoSuggestions = {
        posts: [
            {
                title: 'Free pizza at club meetings!... or burgers... or chips... actually any type of food would be great!',
                upvotes: 15,
                comments: [
                    {
                        body: 'Bring soda too!!',
                        upvotes: 4,
                    },
                    {
                        body: 'What kind of pizza is it?',
                        upvotes: 2,
                    },
                    {
                        body: 'Is it gluten free?',
                        upvotes: 15,
                    },
                ],
            },
            {
                title: 'End all club emails with Laffy Taffy jokes! Sometimes, a simple laugh can make the day go by a lot faster.',
                upvotes: 9,
                comments: [
                    {
                        body: 'Why Laffy Taffy? Let\'s use pizza jokes?',
                        upvotes: 1,
                    },
                    {
                        body: 'What kind of pizza jokes do you know?',
                        upvotes: 7,
                    },
                    {
                        body: 'Can we just end club emails without any jokes?...',
                        upvotes: 3,
                    },
                ],
            },
            {
                title: 'Retrofit water fountains with Gatorade, Please!!! Oh wait, there should also be a healthy alternative, say like... water? hahaha nvm',
                upvotes: 7,
                comments: [],
            },
            {
                title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings or just have a juke box that plays random songs to play-off the speakers when they go on for too long!',
                upvotes: 3,
                comments: [],
            },
            {
            	title: 'Change the layout of the design element, the page looks very childish. Which idiot did the CSS for this?',
                upvotes: 6,
                comments: [],
            },
            {
            	title: 'The background looks too plain, maybe we should incorporate some sort of design to make things blend better?',
                upvotes: 14,
                comments: [],
            },
            {
            	title: 'Lock in the header so that it\'s in a fixed position. This way, the suggestions can scroll all while showing the header of the page.',
                upvotes: 4,
                comments: [],
            },
            {
            	title: 'We should have a mentor service so that students can have some guidance throughout the learning experience to answer potiential problems that may arise.',
                upvotes: 11,
                comments: [],
            },
            {
            	title: 'We should learn from Uncle Sam and have furlow! Most of the staff would sure appreciate some extra time off. Plus, everything is deadline based anyways so does it really matter if we punch in 9-5?',
                upvotes: 9,
                comments: [],
            },
        ]
    };
    return demoSuggestions;
}]);
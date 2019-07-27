const userData = {
    "results": [{
            "gender": "male",
            "name": {
                "title": "senator",
                "first": "bernie",
                "last": "sanders"
            },
            "location": {
                "city": "Burlington",
                "state": "Vermont"
            },
            "issues": {
                "date": "2012-07-27T03:33:33Z",
                "age": 6
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/53.jpg",
                "icon": "https://pbs.twimg.com/profile_images/705594764658286592/ed-GOUxB_400x400.jpg"}
        },
        {
            "gender": "female",
            "name": {
                "title": "Senator",
                "first": "elizabeth",
                "last": "warren"
            },
            "location": {
                "city": "Boston",
                "state": "massachussets"
            },
            "issues": {
                "date": "2012-07-27T03:33:33Z",
                "age": 6
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/21.jpg",
                "icon": "http://stopthecap.com/wp-content/uploads/2015/10/warren.jpg"}
        },
        {
            "gender": "male",
            "name": {
                "title": "mr",
                "first": "joe",
                "last": "biden"
            },
            "location": {
                "city": "wilmington",
                "state": "delaware"
            },
            "issues": {
                "date": "2016-08-15T02:00:31Z",
                "age": 2
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/66.jpg",
                "icon": "https://i.imgur.com/0wbX6kR.jpg",            },
        },
        {
            "gender": "male",
            "name": {
                "title": "mr",
                "first": "Beto",
                "last": "O'Rourke"
            },
            "location": {
                "city": "el paso",
                "state": "Texas"
            },
            "issues": {
                "date": "2016-08-15T02:00:31Z",
                "age": 2
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/66.jpg",
                "icon": "https://assets3.thrillist.com/v1/image/2814565/size/sk-2017_04_featured_listing_mobile.jpg"},
        },
        {
            "gender": "female",
            "name": {
                "title": "senator",
                "first": "kamala",
                "last": "harris"
            },
            "location": {
                "city": "sacramento",
                "state": "california"
            },
            "issues": {
                "date": "2016-08-15T02:00:31Z",
                "age": 2
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/66.jpg",
                "icon": "https://miro.medium.com/fit/c/256/256/1*otydHRTFB1BbHZ4Xu4dLQA.png",},
        },
        {
            "gender": "male",
            "name": {
                "title": "mr",
                "first": "pete",
                "last": "buttigieg"
            },
            "location": {
                "city": "south bend",
                "state": "indiana"
            },
            "issues": {
                "date": "2016-08-15T02:00:31Z",
                "age": 2
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/66.jpg",
                "icon": "https://styles.redditmedia.com/t5_nahld/styles/communityIcon_hxeyojcanp731.jpg"},
        },
        {
            "gender": "male",
            "name": {
                "title": "senator",
                "first": "cory",
                "last": "booker"
            },
            "location": {
                "city": "newark",
                "state": "new jersey",
                "postcode": 47761,
                "timezone": {
                    "offset": "+5:45",
                    "description": "Kathmandu"
                }
            },
            "issues": {
                "date": "2016-08-15T02:00:31Z",
                "age": 2
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/66.jpg",
                "icon": "https://pbs.twimg.com/profile_images/1091308075041079297/Yz_PLR20.jpg"},
        },
        {
            "gender": "female",
            "name": {
                "title": "senator",
                "first": "amy",
                "last": "klobuchar"
            },
            "location": {
                "city": "Minneapolis",
                "state": "minnesota"
            },
            "issues": {
                "date": "2016-08-15T02:00:31Z",
                "age": 2
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/66.jpg",
                "icon": "https://pbs.twimg.com/profile_images/1059812997982511105/lgFAlE5t.jpg"},
        },
        {
            "gender": "male",
            "name": {
                "title": "",
                "first": "Julián",
                "last": "Castro"
            },
            "location": {
                "city": "San Antonio",
                "state": "Texas"
            },
            "issues": {
                "date": "2016-08-15T02:00:31Z",
                "age": 2
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/66.jpg",
                "icon": "https://miro.medium.com/fit/c/256/256/0*Yu171xeFxAqDw5lx.jpeg"},
        }
    ]
}

const modifiedData = userData.results.map(function (User) {

    return User;
});

export default modifiedData;
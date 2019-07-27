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
                "state": "Vermont",
                "postcode": "4299",
                "timezone": {
                    "offset": "+6:00",
                    "description": "Almaty, Dhaka, Colombo"
                }
            },
            "issues": {
                "date": "2012-07-27T03:33:33Z",
                "age": 6
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/53.jpg",
                "icon": "https://pbs.twimg.com/profile_images/705594764658286592/ed-GOUxB_400x400.jpg",            }
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
                "state": "massachussets",
                "postcode": 18419,
                "coordinates": {
                    "latitude": "-56.3388",
                    "longitude": "8.5097"
                },
                "timezone": {
                    "offset": "-1:00",
                    "description": "Azores, Cape Verde Islands"
                }
            },
            "issues": {
                "date": "2012-07-27T03:33:33Z",
                "age": 6
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/21.jpg",
                "icon": "http://stopthecap.com/wp-content/uploads/2015/10/warren.jpg",            }
        },
        {
            "gender": "male",
            "name": {
                "title": "mr",
                "first": "Beto",
                "last": "O'Rourke"
            },
            "location": {
                "city": "wilmington",
                "state": "delaware",
                "postcode": 47761,
                "coordinates": {
                    "latitude": "28.1044",
                    "longitude": "49.4421"
                },
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
                "icon": "https://assets3.thrillist.com/v1/image/2814565/size/sk-2017_04_featured_listing_mobile.jpg",            },
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
                "state": "delaware",
                "postcode": 47761,
                "coordinates": {
                    "latitude": "28.1044",
                    "longitude": "49.4421"
                },
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
                "icon": "https://i.imgur.com/0wbX6kR.jpg",            },
        }
    ],
}

const modifiedData = userData.results.map(function (User) {
    const random = Math.random();
    if (random > 0.3 && random <= 0.7) {
        User.status = "active";
    } else if (random > 0.7) {
        User.status = "inactive";
    } else {
        User.status = "none";
    }
    return User;
});

export default modifiedData;
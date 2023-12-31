
module.exports.homelist = function(req, res) {
    res.render('location-list', {
        title: 'Smart timetable-helps you create a daily or weekly timetable',
        pageHeader: {
            title: 'Smart timetable',
            strapline: 'helps you create a daily or weekly timetable!'
        },
        sidebar: "Looking for easy preparation? smart timetable helps you find a platform to schedule your work when out and about.",
        locations: [{
            name: 'Batch-1',
            subjects: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['maths','science','social'],
            distance: '100m'
        }, {
            name: 'Batch-2',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['maths', 'science', 'social'],
            distance: '200m'
        }, {
            name: 'Batch-3',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 2,
            facilities: ['maths','science','social'],
            distance: '250m'
        }]
    });
};
//locationInfo//
module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'Batch-1',
        pageHeader: {
            title: 'Batch-1'
        },
        sidebar: {
            context: 'is on smart timetable because it has accessible to previous questions and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Batch-1',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['maths', 'science', 'social'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening:'4:00pm',
                closing: '8:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                student: 'Simon Holmes',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                student: 'Charlie ',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'It was okay.'
            }]
        }
    });
};

//locationInfo2//
module.exports.locationInfo2 = function(req, res) {
    res.render('location-info2', {
        title: 'Batch-2',
        pageHeader: {
            title: 'Batch-2'
        },
        sidebar: {
            context: 'is on smart time table because it has accessible to previous papers and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Batchs-2',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['maths', 'science', 'social'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                student: 'Simon Holmes',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                student: 'Charlie Chaplin',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'It was okay. '
            }]
        }
    });
};
//locationInfo3//
module.exports.locationInfo3 = function(req, res) {
        res.render('location-info3', {
            title: 'Batch-3',
            pageHeader: {
                title: 'Batch-3'
            },
            sidebar: {
                context: 'is on smart timetable because it has accessible previous papers and space to sit down with your laptop and get some work done.',
                callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
            },
            location: {
                name: 'Batch-3',
                address: '125 High Street, Reading, RG6 1PS',
                rating: 3,
                facilities: ['maths', 'science', 'social'],
                coords: {
                    lat: 51.455041,
                    lng: -0.9690884
                },
                openingTimes: [{
                    days: 'Monday - Friday',
                    opening: '7:00am',
                    afternoon:'4:00pm',
                    closing: '7:00pm',
                    closed: false
                }, {
                    days: 'Saturday',
                    opening: '8:00am',
                    closing: '5:00pm',
                    closed: false
                }, {
                    days: 'Sunday',
                    closed: true
                }],
                reviews: [{
                    author: 'Simon Holmes',
                    rating: 5,
                    timestamp: '16 July 2013',
                    reviewText: 'What a great place. I can\'t say enough good things about it.'
                }, {
                    author: 'Charlie Chaplin',
                    rating: 3,
                    timestamp: '16 June 2013',
                    reviewText: 'It was okay.'
                }]
            }
        });
    };
//addReview//    
module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review Batch-1 on smarttimetable',
        pageHeader: {
            title: 'Review Smart timetable'
        }
    });
=======
module.exports.homelist = function(req, res) {
    res.render('location-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'LOCATOR',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
        locations: [{
            name: 'Starbucks',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m'
        }, {
            name: 'Cafe Raasta',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '200m'
        }, {
            name: 'Burger King',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 2,
            facilities: ['Food', 'Premium wifi'],
            distance: '250m'
        }]
    });
};
//locationInfo//
module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'Starbucks',
        pageHeader: {
            title: 'Starbucks'
        },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Starbucks',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Simon Holmes',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
            }]
        }
    });
};

//locationInfo2//
module.exports.locationInfo2 = function(req, res) {
    res.render('location-info2', {
        title: 'Cafe Raasta',
        pageHeader: {
            title: 'Cafe Raasta'
        },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Cafe Raasta',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Simon Holmes',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
            }]
        }
    });
};
//locationInfo3//
module.exports.locationInfo3 = function(req, res) {
        res.render('location-info3', {
            title: 'Burger King',
            pageHeader: {
                title: 'Burger King'
            },
            sidebar: {
                context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
                callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
            },
            location: {
                name: 'Burger King',
                address: '125 High Street, Reading, RG6 1PS',
                rating: 3,
                facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                coords: {
                    lat: 51.455041,
                    lng: -0.9690884
                },
                openingTimes: [{
                    days: 'Monday - Friday',
                    opening: '7:00am',
                    closing: '7:00pm',
                    closed: false
                }, {
                    days: 'Saturday',
                    opening: '8:00am',
                    closing: '5:00pm',
                    closed: false
                }, {
                    days: 'Sunday',
                    closed: true
                }],
                reviews: [{
                    author: 'Simon Holmes',
                    rating: 5,
                    timestamp: '16 July 2013',
                    reviewText: 'What a great place. I can\'t say enough good things about it.'
                }, {
                    author: 'Charlie Chaplin',
                    rating: 3,
                    timestamp: '16 June 2013',
                    reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
                }]
            }
        });
    };
//addReview//    
module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review Starbucks on Loc8r',
        pageHeader: {
            title: 'Review Starbucks'
        }
    });
>>>>>>> 29bd2d7c66fa7c3e75e186714d713914421a27db
};
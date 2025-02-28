var relationship1 = {
    name: 'zero',
    friends: ['nero','hero','xero'],
    logFriends: function() {
        var a = this.name;
        this.friends.forEach(function(friend) { //this.____ 는 객체를 지칭한다, 이 경우 relationship1에서 자기 자신을 호출하는 것
            console.log(a, friend)
        });
    },
};
relationship1.logFriends();

const relationship2 = {
    name: 'zero',
    friends: ['nero','hero','xero'],
    logFriends() {
        this.friends.forEach(friend => {
            console.log(this.name, friend)
        });
    },
};
relationship2.logFriends();
// problem statement

//you are giving two targe arrays,list A and list B.each array contains user objects.
//A user object is guaranteed to have a unique id property (a string)and may contain other data, such as a name.

//you task is to write an efficient function that take both lists as input
//and return the total count of users that are present in both lists.

// do not change anything in data setup part

//------------Data setup block--------------//

const USER_COUNT = 50000;
let usersA = [];
let usersB = [];

const createUser = (id) => ({ id: `user_${id}`, name: `User ${id}` });

for (let i = 0; i < USER_COUNT; i++) {
  usersA.push(createUser(i));
  usersB.push(createUser(i + 25000));
}

//users 25000 to 49999 are common(25000 common users)
//-------------------Data setup block---------------

//--------ALGORITHMS--------------

// slow system

const commonFriendsSlow = ( usersA,usersB) => {
  const startTime = performance.now();

  const commonFriends = [];


  // o(n^2)
  usersA.forEach((userA) => {
    usersB.forEach((userB) => {
      if (userA.id === userB.id) {
        commonFriends.push(userA);
      }
    });
  });

  const endTime = performance.now();
  return { count: commonFriends.length, timeTookToFinish: endTime - startTime };
};

console.log(commonFriendsSlow(usersA,usersB));
const data = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    firstName: 'Jen',
    lastName: 'Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    firstName: 'William',
    lastName: 'Johnson',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Cape Girardeau MO',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
];

const profiles = profileIterator(data);

// CAll first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {

  const currentProfile = profiles.next().value;
    if(currentProfile !== undefined){
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">First Name: ${currentProfile.firstName}</li>
      <li class="list-group-item">Last Name: ${currentProfile.lastName}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Location: ${currentProfile.location}</li>
      <li class="list-group-item">Preference: ${currentProfile.gender} 
      looking for ${currentProfile.lookingfor}</li>
    </ul>`;

    document.getElementById('imageDisplay').innerHTML = `
    <img src="${currentProfile.image}">`;
  } else {
    // No more profiles
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ?
       { value: profiles[nextIndex++], done: false } :
       { done: true }
    }
  };
}
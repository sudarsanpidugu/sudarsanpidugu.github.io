const videos = [

  {
    id: 'Rfrlv02QQlo',
    title: 'Python Operators Tutorial',
    thumb: 'https://img.youtube.com/vi/Rfrlv02QQlo/mqdefault.jpg'
  },

  {
    id: 'sTRJUHZoeUU',
    title: 'Linux LVM Tutorial',
    thumb: 'https://img.youtube.com/vi/sTRJUHZoeUU/mqdefault.jpg'
  },

  {
    id: 'PFHDVcrIZdM',
    title: 'Windows Server Tutorial',
    thumb: 'https://img.youtube.com/vi/PFHDVcrIZdM/mqdefault.jpg'
  },

  {
    id: '3j9rG4ra2ME',
    title: 'React Development Tutorial',
    thumb: 'https://img.youtube.com/vi/3j9rG4ra2ME/mqdefault.jpg'
  }

];

const listContainer =
document.getElementById('videoList');

const mainPlayer =
document.getElementById('mainPlayer');

const title =
document.getElementById('videoTitle');

/* CREATE VIDEOS */

videos.forEach((video) => {

  const item =
  document.createElement('div');

  item.className =
  'sidebar-video';

  item.innerHTML = `

    <img src="${video.thumb}" alt="${video.title}">

    <div class="sidebar-video-info">

      <h4>${video.title}</h4>

      <p>Sudarsan Tutorials</p>

    </div>

  `;

  /* CLICK EVENT */

  item.onclick = () => {

    mainPlayer.src =
    `https://www.youtube.com/embed/${video.id}?autoplay=1`;

    title.textContent =
    video.title;

  };

  listContainer.appendChild(item);

});
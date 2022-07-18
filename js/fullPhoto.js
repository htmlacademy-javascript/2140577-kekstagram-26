import { similarPhotoDescription } from './data.js';
import { isEscapeKey } from './util.js';

const fullPhoto = similarPhotoDescription();

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const socialCommentsLoader = document.querySelector('.social__comments-loader');
const previewPhoto = bigPicture.querySelector('.big-picture__img');
const photoLike = bigPicture.querySelector('.likes-count');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const socialComment = bigPicture.querySelector('.social__comments');
const caption = bigPicture.querySelector('.social__header');
const closePreviewPhoto = bigPicture.querySelector('#picture-cancel');

const generatePhotoList = () => {
  const similarPhotosFragment = document.createDocumentFragment();
  fullPhoto.forEach(({url})=>{
    const picTemplate=previewPhoto.cloneNode(true);
    picTemplate.querySelector('img').setAttribute('src', url);
    similarPhotosFragment.append(picTemplate);
  });
  fullPhoto.forEach(({like})=>{
    const likeTemplate=photoLike.cloneNode(true);
    likeTemplate.textContent=like;
    similarPhotosFragment.append(likeTemplate);
  });
  fullPhoto.forEach(({comments})=>{
    const commentTemplate=socialCommentCount.cloneNode(true);
    commentTemplate.querySelector('.comments-count').textContent=comments;
    similarPhotosFragment.append(commentTemplate);
  });

  fullPhoto.forEach(({avatar, name, comments})=>{
    const socialCommentTemp=socialComment.cloneNode(true);
    socialCommentTemp.querySelector('.social__picture').setAttribute('src', avatar);
    socialCommentTemp.querySelector('.social__picture').setAttribute('alt', name);
    socialCommentTemp.querySelector('.social__text').textContent=comments;
    similarPhotosFragment.append(socialCommentTemp);
  });

  fullPhoto.forEach(({descriptions})=>{
    const captionTemp=caption.cloneNode(true);
    captionTemp.querySelector('.social__caption').textContent=descriptions;
    similarPhotosFragment.append(captionTemp);
  });
  bigPicture.after(similarPhotosFragment);
};

const clearPhotoList = ()=>{
  bigPicture.innerHTML='';
};
const onEscKeydown =  (evt) =>{
  if(isEscapeKey(evt)){
    evt.preventDefault();
    bigPicture.classList.add('hidden');
  }
};
function openPhoto (){
  bigPicture.classList.remove('hidden');
  socialCommentCount.classList.add('hidden');
  socialCommentsLoader.classList.add('hidden');
  body.classList.add('modal-open');
  generatePhotoList();

  document.addEventListener('keydown', onEscKeydown);
}
function closePhoto () {
  bigPicture.classList.add('hidden');
  socialCommentCount.classList.remove('hidden');
  socialCommentsLoader.classList.remove('hidden');
  body.classList.remove('modal-open');
  clearPhotoList();

  document.removeEventListener('keydown', onEscKeydown);
}

export { openPhoto,closePhoto, closePreviewPhoto};

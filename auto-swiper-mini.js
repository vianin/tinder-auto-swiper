function swipeRight(){var className='recsGamepad__button End(15px)';var likeButton=document.getElementsByClassName(className)[0];likeButton.click();} function swipeLeft(){var className='recsGamepad__button Start(15px)';var dislikeButton=document.getElementsByClassName(className)[0];dislikeButton.click();} function getRandomDelay(){return Math.round(Math.random()*(2000-500))+500;} function getRandomInt(max){return Math.floor(Math.random()*Math.floor(max));} (function autoSwiper(){var delay=getRandomDelay();var choice=getRandomInt(2);setTimeout(function(){if(choice==1){swipeRight();}else{swipeLeft();} autoSwiper();},delay);}());

(()=>{"use strict";var e="",t=[{name:"Development",description:"Development, refinement, programming, documentation, testing and error correction. We are distinguished by the ability to solve problems and not be afraid of difficulties. Our activity is the constant creation of a new one.",image:e+"5b97baf032e65ad04074.jpg"},{name:"Design",description:"Not only stunning visual design, but most importantly user convenience. This will be a great advantage over competitors.",image:e+"131e439d24b3bed8721e.jpg"},{name:"Support",description:"We will set up analytics on the site and conduct advertising, and subsequently modify and maintain the site content. This way the product will be able to work for the benefit of the business.",image:e+"56cdd8bfe0825724345c.jpg"}],n=document.querySelector(".products__container");t.forEach((function(e){var t,o,i;o=e,(i=n.querySelector(".product-template").content.querySelector(".products__item").cloneNode(!0)).querySelector(".products__image").src=o.image,i.querySelector(".products__image").alt=o.name,i.querySelector(".products__title").textContent=o.name,i.querySelector(".products__text").textContent=o.description,t=i,n.append(t)}))})();
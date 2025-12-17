import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {


  const button = document.createElement('button');
  const span = document.createElement('span');
  let type;
  const aTag = document.createElement('a');
   [...block.children].forEach((row) => {
    row.querySelectorAll('div').forEach((it)=> {
          if(it && it.textContent && it.textContent.toLowerCase() == 'type'){
            type = it.nextElementSibling.textContent;
            if(type == 'button'){
              button.setAttribute('id','#');
              button.setAttribute('class','cmp-button');
            }else{
              aTag.setAttribute('id','#');
              aTag.setAttribute('class','cmp-button');
            }
          }
          if(it && it.textContent && it.textContent.toLowerCase() == 'text'){
            let title = it.nextElementSibling.textContent;
            span.setAttribute('class','cmp-button__text');
            span.textContent = title;
          }
          if(it && it.textContent && it.textContent.toLowerCase() == 'link'){
                let href = it.nextElementSibling.textContent;
                aTag.setAttribute('href',href);
                button.setAttribute('href',href);
          }
          if(it && it.textContent && it.textContent.toLowerCase() == 'icon'){
                  let icon = it.nextElementSibling.textContent;
                  const iconTg = document.createElement('span');
                  iconTg.setAttribute('class','cmp-button__icon cmp-button__icon--'+icon);
                  button.append(iconTg);
          }
       })


   })
   if(type.toLowerCase() == 'button'){
     button.append(span)
     block.replaceWith(button)

   }else{
     aTag.append(span)
     block.replaceWith(aTag)

   }

}
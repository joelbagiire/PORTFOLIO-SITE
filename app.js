const btn = document.querySelector('#mode')
const pal = document.querySelector('#pal')
const linkOne = document.querySelector('.linkOne')
const linkTwo = document.querySelector('.linkTwo')
const linkThree = document.querySelector('.linkThree')
const linkFour = document.querySelector('.linkFour')
const linkFive = document.querySelector('.linkFive')
const container = document.querySelector('#container')
const heading = document.querySelector('#heading')
const headingTwo = document.querySelector('#headingTwo')
const headingThree = document.querySelector('#headingThree')
const nav = document.querySelector('#nav')
const article = document.querySelector('#art')
const add = document.querySelector('#add')
const con = document.querySelector('#con')
const mail = document.querySelector('#mail')

btn.addEventListener('click',changeMode)

function changeMode(){
    if(btn.checked){
        add.style.color = '#fff'
        con.style.color = '#fff'
        mail.style.color = '#fff'
        article.style.color = '#fff'
        nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.048)'
        container.style.background = '#000'
        headingTwo.style.color = '#fff'
        headingThree.style.color = '#fff'
        heading.style.color = '#fff'
        pal.style.color = '#fff'
        linkOne.style.color = '#fff'
        linkTwo.style.color = '#fff'
        linkThree.style.color = '#fff'
        linkFour.style.color = '#fff'
        linkFive.style.color = '#fff'
    }else{
        add.style.color = '#000'
        con.style.color = '#000'
        mail.style.color = '#000'
        article.style.color = '#000'
        nav.style.borderBottom ='1px solid rgba(0, 0, 0, 0.055)'
        container.style.background = '#fff'
        heading.style.color = '#000'
        headingThree.style.color = '#000'
        headingTwo.style.color = '#000'
        pal.style.color = '#000'
        linkOne.style.color = '#000'
        linkTwo.style.color = '#000'
        linkThree.style.color = '#000'
        linkFour.style.color = '#000'
        linkFive.style.color = '#000'
    }
}



const home = document.querySelector('#info')
const about = document.querySelector('#about-me')
const skills = document.querySelector('#my-skills')
const contact = document.querySelector('#contact')

linkOne.addEventListener('click',() => {  
  about.style.display = 'none'
  linkTwo.classList.remove('active')
   contact.style.display = 'none'
   linkFour.classList.remove('active')
    skills.style.display = 'none'
    linkThree.classList.remove('active')
    home.style.display = 'flex'
    linkOne.classList.add('active')
  })
  linkTwo.addEventListener('click',() => {  
     home.style.display = 'none'
     linkOne.classList.remove('active')
     contact.style.display = 'none'
     linkFour.classList.remove('active')
     skills.style.display = 'none'
     linkThree.classList.remove('active')
     about.style.display = 'flex'
     linkTwo.classList.add('active')
   })
linkThree.addEventListener('click',() => {
  about.style.display = 'none'
  linkTwo.classList.remove('active')
  contact.style.display = 'none'
  linkFour.classList.remove('active')
  home.style.display = 'none'
  linkOne.classList.remove('active')
  skills.style.display = 'flex'
  linkThree.classList.add('active')
})
linkFour.addEventListener('click',() => {
    about.style.display = 'none'
    linkTwo.classList.remove('active')
    home.style.display = 'none'
    skills.style.display = 'none'
    linkThree.classList.remove('active')
    linkOne.classList.remove('active')
    contact.style.display = 'flex'
    linkFour.classList.add('active')
})


window.addEventListener('load',() => {
  if(btn.checked){
    btn.checked
  }else{
    btn.unchecked
  }
})
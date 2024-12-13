gsap.registerPlugin(ScrollTrigger)
const sunDance = gsap.timeline({
    scrollTrigger: {
      trigger:'.line-one',
      start: 'top center',
      
    // markers: true
    }
  })
sunDance
    .from('.line-one span', {
    y:'300',
    duration:.5,
    stagger:.2
    },0)

    .to('.line-one', 
    {backgroundColor: 'yellow', 
      duration: 2 },1)

      .from('.sun',{
        x:'50vw',
        duration:'1'
      },2)
      
      .to('.line-one span',{
        x:'100vw',
        duration:1
      },3)
      .to('.sun',{
        x:'-100vw',
        duration:1
      },3);;



const Or = gsap.timeline({
    scrollTrigger: {
    trigger:'.line-two',
    start: 'top center',
   // markers: true
    }
    })

 Or
    .from('.line-two span:nth-child(1)', 
    {x:'-2000',

    scale:"20",
    duration:1,
    stagger:.2
    },0)

    .to('.line-two span:nth-child(1)', 
    {y:'-10',
    duration:.5,
    stagger:.2
    },1)
    .to('.line-two span:nth-child(1)', 
    {y:'0',
    duration:.5,
    stagger:.2
    },)


    .from('.line-two span:nth-child(2)', 
    {x:'2000',
    scale:"20",
    duration:1,
    stagger:.2
    },0)
    .to('.line-two span:nth-child(2)', 
    {y:'-10',
    duration:.5,
    stagger:.2
    },2)
    .to('.line-two span:nth-child(2)', 
    {y:'0',
    duration:.5,
    stagger:.2
    },);

    const moonDance = gsap.timeline({
        scrollTrigger: {
          trigger:'.line-three',
          start: 'top center',
          
         markers: true
        }
      })
    moonDance
        .from('.line-three span', {
        y:'100',
        duration:.5,
        stagger:.2,
        },0)


        .to('.line-three', 
        {backgroundPositionX: 0 ,
        color:'white',
          duration: 2 },1)

          .from('.moon',{
            x:'50vw',
            duration:'1'
          },1);
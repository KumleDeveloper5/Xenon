  console.log("enter");   

   const langEl = document.querySelector('.langWrap');
		const link = document.querySelectorAll('a');
		/*const titleEl = document.querySelector('.title');
		const descrEl = document.querySelector('.description');
		
		const t=document.querySelector('.t');
		const d=document.querySelector('.d');
		*/
		const title=document.querySelector('.title');
		const d1=document.querySelector('.d1');
		const a1=document.querySelector('.a1');
		const d2=document.querySelector('.d2');
		const d3=document.querySelector('.d3');
		const d4=document.querySelector('.d4');
		const d5=document.querySelector('.d5');
		const d6=document.querySelector('.d6');
		const d7=document.querySelector('.d7');
		const d8=document.querySelector('.d8');
		const d9=document.querySelector('.d9');
		const d10=document.querySelector('.d10');
		const d11=document.querySelector('.d11');
		const d12=document.querySelector('.d12');
		const d13=document.querySelector('.d13');
		const d14=document.querySelector('.d14');
		const d15=document.querySelector('.d15');
		const t1=document.querySelector('.t1');
		const t2=document.querySelector('.t2');
		const t3=document.querySelector('.t3');
		const t4=document.querySelector('.t4');
		const t5=document.querySelector('.t5');
		const t6=document.querySelector('.t6');
		const t7=document.querySelector('.t7');

		link.forEach(el => {
			el.addEventListener('click', () => {
				//langEl.querySelector('.active').classList.remove('active');
				//el.classList.add('active');

				const attr = el.getAttribute('language');

				//titleEl.textContent = data[attr].title;
				//descrEl.textContent = data[attr].description;
				title.textContent = data[attr].title;
				d1.textContent =data[attr].d1;
				a1.textContent =data[attr].a1;
				d2.textContent =data[attr].d2;
				d3.textContent =data[attr].d3;
				d4.textContent =data[attr].d4;
				d5.textContent =data[attr].d5;
				d6.textContent =data[attr].d6;
				d7.textContent =data[attr].d7;
				d8.textContent =data[attr].d8;
				d9.textContent =data[attr].d9;
				d10.textContent =data[attr].d10;
				d11.textContent =data[attr].d11;
				d12.textContent =data[attr].d12;
				d13.textContent =data[attr].d13;
				d14.textContent =data[attr].d14;
				d15.textContent =data[attr].d15;
				
				t1.textContent =data[attr].t1;
				t2.textContent =data[attr].t2;
				t3.textContent =data[attr].t3;
				t4.textContent =data[attr].t4;
				t5.textContent =data[attr].t5;
				t6.textContent =data[attr].t6;
				t7.textContent =data[attr].t7;
				
				
				console.log(data[attr].d3);
				
			});
		});
		
		var data = {
			  "english": 
			  {
			    "title": "xenon",
				"d1": "Another fine responsive by ",
				"a1" : "Check it",
				"d2" :"This is a site to learn programing languages, linux and cmd COMMANDS",
				"d3" :"This site will help you to understand and know how to program,create apps and release them<br />It also has blogs about how to use the linux and cmd commands..",
				"d4" :"In here you will learn all the things you need to start with java it includes examples and brief explanation about the basic concept in java.",
				"d5" :"This is another repository that you can choose if you want to be a web developer. It has everything you need to start with html and css.",
				"d6" :"Commands are the only thing that will give you control, this repository has most of the commands that are used in bash and in cmd.",
				"d7" :"you can contact us using these different sites",
				"d8" :"We are available in telegram channel,github account,We also have other reference material that you can use outside ourweb.",
				"d9" :"This is our official channel in telegram you can contact us there and see the other things we do.",
				"d10" :"This is my official Github account. You can check my other works and contact me for any question on this site.",
				"d11" :"This is my gmail account. If you have any request and wish to contact me you can use this account.",
				"d12" :"This is a website to use as reference for my page and it also has additional materials.",
				"d13" :"if you have any suggestions for this page feel free to say so it will help me so much.",
				"d14" :"So enjoy my website and recommend any change you want in the site until a new update is added.",
				"d15" :"click here if you want be in our group.",
				
				"t1" :"the java Repository",
				"t2" :"the html and css repository",
				"t3" :"linux and cmd commands",
				"t4" :"suggetion",
				"t5" :"check out",
				"t6" :"Learn More",
				"t7" :"Learn More"
		
			  },
			  "amharic":
			  {
				  "title":"ዜነን",
				  "d1" :"ሌላኛው አሪፍ የመረጃ መረብ ",
				  "a1" :"ይጎብኙ",
				  "d2" :"ይህ መረብ የፕሮግራሚንግ ቋንቋዎች፣ የLinux እና CMD ኮማንዶች መማሪያ ቦታ ነው፡፡",
				  "d3" :"ይህ መረብ እንዴት ፕሮግራም እንደሚደረግ፣ አፕሊኬሽን እንደሚሰራ፣ እና እንዴት የሰራችሁትን እንደሚለቁ እንድትረዱ ያግዛችኋል፡፡ እንዲሁም እንዴት Linux እና CMD ኮማንዶችእንደምትጠቀሙ ያግዛችኋል፡፡",
				  
				  "d4" :"በዚህ ውስጥ ስለ Java ማወቅ ያለባችሁን በሙሉ ትማራላችሁ፤ በተጨማሪም ስለ Java መሰረታዊ ሀሳቦችን ምሳሌና ዝርዝር መረጃዎች ያካትታል፡፡",
				  "d5" :"ይህ ገጽ የመረጃ መረብ ዲዛይነር ለመሆን ከወሰኑ ስለ html እና CSS መሰረታዊ ሀሳቦችን እንድታውቁ ይረዳችኋል፡፡",
				  "d6" :"ኮማንዶች ብቻ ናቸው በአንድ ኮምፒውተር ውስጥ ትዕዛዝ ማስተላለፍ የሚቻለው፤ በዚህ ገጽ ውስጥ የbash እና cmd ኮማንዶችን በሙሉ ያካትታል፡፡",
				  "d7" :"እነዚህን የተለያዩ ጣቢያዎች በመጠቀም ሊያነጋግሩን ይችላሉ።",
				  "d8" :"በቴሌግራም ቻናል ፣ጂትዩብ አካውንት ውስጥእንገኛለን ፣ከእኛ ድረ-ገጽ ውጭ ልትጠቀሙባቸው የምትችሏቸው ሌሎች የማጣቀሻ ዕቃዎችም አሉን።",
				  "d9" :"ይህ በቴሌግራም የኛ ኦፊሴላዊ ቻናል ነው እዚያም እኛን ማግኘት እና ሌሎች የምናደርጋቸውን ነገሮች ማየት ይችላሉ።",
				  "d10" :"ይህ የእኔ ይፋዊ የ Github መለያ ነው። ሌሎች ስራዎቼን ማየት እና በዚህ ገፅ ላይ ለሚገኝ ማንኛውም ጥያቄ እኔን ማግኘት ይችላሉ።",
				  "d11" :"ይህ የእኔ gmail መለያ ነው። ማንኛውም ጥያቄ ካለዎት እና እኔን ለማግኘት ከፈለጉ ይህን መለያ መጠቀም ይችላሉ።",
				  "d12" :"ይህ ለገጼ ዋቢነት የሚያገለግል ድህረ ገጽ ነው እና ተጨማሪ እቃዎችም አሉት።",
				  "d13" :"ለዚህ ፔጅ ምንም አይነት አስተያየት ካሎት በነጻነት ለመናገር በጣም ይረዳኛል.",
				  "d14" :"ስለዚህ በድር ጣቢያዬ ይደሰቱ እና አዲስ ዝመና እስኪጨመር ድረስ በጣቢያው ላይ የሚፈልጉትን ማንኛውንም ለውጥ ይንገሩ።",
				  "d15" :"በቡድናችን ውስጥ መሆን ከፈለጉ እዚህ ጠቅ ያድርጉ።",
				  "t1" :"የJava ገጽ",
				  "t2" :"የhtml እና CSS ገጽ",
				  "t3" :"የLinux እና CMD ገጽ",
				  "t4" :"ሀሳብ",
		          "t5" :"ጨርሰህ ውጣ",
				  "t6" :"ተጨማሪ እወቅ",
				  "t7" :"ተጨማሪ እወቅ"

			  }
			  
			 
			}
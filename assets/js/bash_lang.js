  console.log("enter");   

   const langEl = document.querySelector('.langWrap');
		const link = document.querySelectorAll('a');
		/*const titleEl = document.querySelector('.title');
		const descrEl = document.querySelector('.description');
		
		const t=document.querySelector('.t');
		const d=document.querySelector('.d');
		*/
		//const title=document.querySelector('.title');
		const d1=document.querySelector('.d1');
	
		const d2=document.querySelector('.d2');
		const d3=document.querySelector('.d3');
		const d4=document.querySelector('.d4');
		const d5=document.querySelector('.d5');
		const d6=document.querySelector('.d6');
	
		
		const t1=document.querySelector('.t1');
		const t2=document.querySelector('.t2');
		const t3=document.querySelector('.t3');
		const t4=document.querySelector('.t4');
		const t5=document.querySelector('.t5');
		const t6=document.querySelector('.t6');
	

		link.forEach(el => {
			el.addEventListener('click', () => {
				//langEl.querySelector('.active').classList.remove('active');
				//el.classList.add('active');

				const attr = el.getAttribute('language');

				//titleEl.textContent = data[attr].title;
				//descrEl.textContent = data[attr].description;
				
				d1.textContent =data[attr].d1;
				
				d2.textContent =data[attr].d2;
				d3.textContent =data[attr].d3;
				d4.textContent =data[attr].d4;
				d5.textContent =data[attr].d5;
				d6.textContent =data[attr].d6;
				
				
				
				t1.textContent =data[attr].title;
				t2.textContent =data[attr].t2;
				t3.textContent =data[attr].t3;
				t4.textContent =data[attr].t4;
				t5.textContent =data[attr].t5;
				t6.textContent =data[attr].t6;
			
				
				
				console.log(data[attr].d3);
				
			});
		});
		
		var data = {
			  "english": 
			  {
			    "title": "xenon",
				"d1": "here you can learn every thing that you need to write commands b/c this are what give you control ",
			    "d2":"The command line (also called the console or terminal) is a text-based interface within the operating system, that forwards commands from the user to the operating system. This makes it possible, for example, to organize files, start programs, or run other commands linked to the operating system, computer, or network.",
                "d3":"In general, the connection between operating system – regardless of whether graphical (GUI = graphical user interface) or text-based (CLI = command line interpreter) was condensed under the term “Shell.” The default command line interpreter for Windows is called CMD.EXE. In addition, however, there’s also the “PowerShell”: This offers more options than CMD.EXE. For example, automations can be created better with PowerShell. In this way, users can create script programs with the PowerShell scripting language..  ",
                "d4":"The Linux command line is a text interface to your computer. Often referred to as the shell, terminal, console, prompt or various other names, it can give the appearance of being complex and confusing to use. Yet the ability to copy and paste commands from a website, combined with the power and flexibility the command line offers, means that using it may be essential when trying to follow instructions online, including many on this very website!.",
				"d5":"one of the future of java is that it is purely object-orinted unlike c++ that is partially object-orinted this means that even the basic code have to be encapsulated in class",
				"d6":"one of the future of java is that it is purely object-orinted unlike c++ that is partially object-orinted this means that even the basic code have to be encapsulated in class.",
				
				
				
			
				"t2" :"linux and cmd commands",
				"t3" :"what are cmd commnads?",
				"t4" :"what are linux commands?",
				"t5" :"Future of java",
				"t6" :"Next >"
		
			  },
			  "amharic":
			  {
				  "title":"ዜነን",
				  
				  "d1":"እዚህ ትዕዛዞችን ለመፃፍ የሚያስፈልግዎትን ሁሉንም ነገር መማር ይችላሉ ምክንያቱም ይህ ቁጥጥርን ይሰጡዎታል።",
				  "d2":"የትእዛዝ መስመር (ኮንሶል ወይም ተርሚናል ተብሎም ይጠራል) በስርዓተ ክወናው ውስጥ በፅሁፍ ላይ የተመሰረተ በይነገጽ ሲሆን ትዕዛዞችን ከተጠቃሚው ወደ ኦፕሬቲንግ ሲስተም ያስተላልፋል። ይህ ለምሳሌ ፋይሎችን ለማደራጀት፣ ፕሮግራሞችን ለመጀመር ወይም ከኦፕሬቲንግ ሲስተም፣ ኮምፒውተር ወይም አውታረ መረብ ጋር የተገናኙ ሌሎች ትዕዛዞችን ለማስኬድ ያስችላል።",
				  "d3":"በአጠቃላይ በስርዓተ ክወናው መካከል ያለው ግንኙነት - በግራፊክ (GUI = ስዕላዊ የተጠቃሚ በይነገጽ) ወይም በጽሁፍ ላይ የተመሰረተ (CLI = የትዕዛዝ መስመር አስተርጓሚ) ምንም ይሁን ምን ሼል በሚለው ቃል ውስጥ ተጣብቋል. የዊንዶውስ ነባሪ የትዕዛዝ መስመር አስተርጓሚ CMD.EXE ይባላል። በተጨማሪም፣ ሆኖም፣ “PowerShell”ም አለ፡ ይህ ከCMD.EXE የበለጠ አማራጮችን ይሰጣል። ለምሳሌ በPowerShell አውቶማቲክስ በተሻለ ሁኔታ ሊፈጠር ይችላል። በዚህ መንገድ ተጠቃሚዎች በPowerShell ስክሪፕት ቋንቋ የስክሪፕት ፕሮግራሞችን መፍጠር ይችላሉ።",
				  "d4":"የሊኑክስ ትዕዛዝ መስመር ለኮምፒዩተርዎ የጽሑፍ በይነገጽ ነው። ብዙ ጊዜ እንደ ሼል፣ ተርሚናል፣ ኮንሶል፣ መጠየቂያ ወይም የተለያዩ ስሞች እየተባለ የሚጠራው ውስብስብ እና ለመጠቀም ግራ የሚያጋባ መልክ ሊሰጥ ይችላል። ሆኖም ትዕዛዞችን ከድር ጣቢያ የመገልበጥ እና የመለጠፍ ችሎታ፣ የትእዛዝ መስመሩ ከሚሰጠው ሃይል እና ተለዋዋጭነት ጋር ተዳምሮ በመስመር ላይ መመሪያዎችን ለመከተል በሚሞከርበት ጊዜ እሱን መጠቀም አስፈላጊ ሊሆን ይችላል ማለት ነው፣ በዚህ ድረ-ገጽ ላይ ያሉትን ጨምሮ!",
				  "d5":"ከመጪው የጃቫ አንዱ ከ c++ በተለየ መልኩ በንፁህ ነገር ላይ ያተኮረ መሆኑ ነው ከፊል በነገር ላይ ያተኮረ ይህ ማለት መሰረታዊ ኮድ እንኳን በክፍል ውስጥ መካተት አለበት ማለት ነው።",
				  "d6":"anotehr futuer በዊንዶው ፣ ሊኑክስ እና አንድሮይድ በመኪኖች ውስጥ እንኳን ሳይቀር በሁሉም ፕላትፎርሞች ላይ መስራት ይችላል እና እሱን በጣም ኃይለኛ ያደርገዋል።",
				 
				 
				  "t2" :"LINUX እና CMD ትዕዛዞች",
				  "t3" :"CMD COMMNADS ምንድን ናቸው?",
				  "t4" :"የሊኑክስ ትዕዛዞች ምንድን ናቸው?",
				  "t5":"የጃቫ የወደፊት",
				  "t6":"ቀጣይ >",
		        

			  }
			  
			 
			}
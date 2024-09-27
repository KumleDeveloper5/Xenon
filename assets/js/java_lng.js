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
		const d7=document.querySelector('.d7');
		
		const t1=document.querySelector('.t1');
		const t2=document.querySelector('.t2');
		const t3=document.querySelector('.t3');
		const t4=document.querySelector('.t4');
	

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
				d7.textContent =data[attr].d7;
				
				
				t1.textContent =data[attr].t1;
				t2.textContent =data[attr].t2;
				t3.textContent =data[attr].t3;
				t4.textContent =data[attr].t4;
			
				
				
				console.log(data[attr].d3);
				
			});
		});
		
		var data = {
			  "english": 
			  {
			    "title": "xenon",
				"d1": "here you can learn everything that you need to start with java so let's start ",
				
				"d2" :"Java started with the name green project. First it was made for the consumer electronics market but after finishing it it was clear that it was more than that. To create java a man called James Gosling was given a task to find a programming language for it. His first choice was c++ but it complexity made it hard to choose so he made Another language is called Oka, the first name for java and this programming language was special because it was compiled and interpreted to give it speed and to run on every platform out there.",
				"d3" :"Unlike other programming languages at that time java was a compiled and interpreted language this meant that to run java first the source code changed to byte-code by compiler than the interprented run the program.Bytecode is program code that has been compiled from source code into low-level code designed for a software interpreter.i said before that the name for java was oka renamed in the name of the oka tree in their office but they changed its name to java because when they were making the language they were drinking lots of coffee so they called it java. After finishing it it was so powerful for just the commercial electronic market so they applied it for web server applications and the first way to use it in their server was netescape.    ",
				"d4" :"One of the future of java is that it is purely object-oriented unlike c++ that is partially object-oriented this means that even the basiccode has to be encapsulated in class.",
				"d5" :"Another future is that it can work on almost all platforms starting with Windows,Linux,Android, even in cars and watch that make him so powerful",
				"d6" :"it has a mecanisim called garbage collection that deletes unused class and objects in aother programming languages you need to do this by you selfbut java provide a method to make this easy.",
				"d7" :"it has a mecanisim called garbage collection that deletes unused class and objects in aother programming languages you need to do this by you selfbut java provide a method to make this easy.",
				
				"t1" :"java course",
				"t2" :"history of java",
				"t3" :"Future of java",
				"t4" :"Next >",
				
		
			  },
			  "amharic":
			  {
				  "title":"ዜነን",
				  "d1" :"እዚህ በጃቫ ለመጀመር የሚፈልጉትን ሁሉ መማር ይችላሉ ስለዚህ እንጀምር. ",
				 
				  "d2" :"ጃቫ የጀመረው በአረንጓዴው ፕሮጀክት ስም ነው። በመጀመሪያ ለተጠቃሚው ኤሌክትሮኒክስ ገበያ የተሰራ ነበር ነገር ግን ከጨረሰ በኋላ ከዚያ በላይ እንደሆነ ግልጽ ነበር. ጃቫ ለመፍጠር ጄምስ ጎስሊንግ የሚባል ሰው የፕሮግራም አወጣጥ ቋንቋ እንዲያገኝ ተሰጠው። የመጀመርያ ምርጫው ሲ++ ነበር ነገርግን ውስብስብነቱ ለመምረጥ አስቸጋሪ አድርጎታል ስለዚህም ሰራ ሌላ ቋንቋ ኦካ ይባላል የጃቫ የመጀመሪያ ስም ይህ የፕሮግራም አወጣጥ ቋንቋ ልዩ ነበር ምክንያቱም የተቀናጀ እና የተተረጎመ በመሆኑ ፍጥነት እንዲሰጠው እና በየመድረኩ እንዲሮጥ ነው። እዚያ።",
				  "d3" :"በዚያን ጊዜ ከሌሎች የፕሮግራሚንግ ቋንቋዎች በተለየ መልኩ ጃቫ የተቀናበረ እና የተተረጎመ ቋንቋ ነበር ይህ ማለት በመጀመሪያ ጃቫን ለማስኬድ ከምንጩ ኮድ ወደ ባይት ኮድ በኮምፕሌተር ተቀይሯል ከትርጓሜው ይልቅ። ለሶፍትዌር አስተርጓሚ ተብሎ የተነደፈ ዝቅተኛ ደረጃ ኮድ ከዚህ በፊት የጃቫ ስም ኦካ ተብሎ በቢሮአቸው ውስጥ ባለው የኦካ ዛፍ ስም ተቀይሯል ነገር ግን ስሙን ወደ ጃቫ ቀይረውታል ምክንያቱም ቋንቋውን በሚሰሩበት ጊዜ ብዙ ይጠጡ ነበር ። ቡና ስለዚህ ጃቫ ብለው ጠሩት። ከጨረሱ በኋላ ለንግድ ኤሌክትሮኒክስ ገበያ በጣም ኃይለኛ ስለነበር ለድር አገልጋይ አፕሊኬሽኖች አመለከቱ እና በአገልጋያቸው ውስጥ ለመጠቀም የመጀመሪያው መንገድ ኔትስኬፕ ነበር።",
				  "d4" :" ከወደፊት የጃቫ አንዱ ከ c++ በተለየ መልኩ በንፁህ ነገር ላይ ያተኮረ መሆኑ ነው ከፊል ቁስ-ተኮር ነው ይህ ማለት መሰረታዊ ኮድ እንኳን በክፍል ውስጥ መካተት አለበት ማለት ነው።",
				  "d5" :" ሌላው ወደፊት ከሞላ ጎደል በሁሉም መድረኮች ላይ ከዊንዶውስ፣ ሊኑክስ፣ አንድሮይድ ጀምሮ በመኪና ውስጥም ቢሆን እና እሱን በጣም ሃይለኛ በሚያደርገው የእጅ ሰዓት ላይ መስራት ይችላል።",
				  "d6" :"ቆሻሻ ማሰባሰብ የሚባል መካኒሲም አለዉ ጥቅም ላይ ያልዋለዉን ክፍል እና እቃዎችን በሌላ የፕሮግራሚንግ ቋንቋዎች የሚሰርዝ ሜካኒሲም አለዉ አንተ ራስህ ይህን ማድረግ አለብህ ነገርግን ይህን ቀላል ለማድረግ ጃቫ አቅርበዋል።",
				  "d7" :" ጥቅም ላይ ያልዋሉ ክፍሎችን እና ሌሎች የፕሮግራሚንግ ቋንቋዎችን የሚሰርዝ ሜካኒሲም የሚባል የቆሻሻ ማሰባሰብያ አለው አንተ ራስህ ይህን ማድረግ ያለብህ ነገርግን ይህን ቀላል ለማድረግ ጃቫ ዘዴን ይሰጣል።",
				 
				 
				  "t1" :"የጃቫ ኮርስ",
				  "t2" :"የጃቫ ታሪክ",
				  "t3" :"የጃቫ የወደፊት",
				  "t4" :"ቀጣይ >",
		        

			  }
			  
			 
			}
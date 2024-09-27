  console.log("enter");   

   const langEl = document.querySelector('.langWrap');
		const link = document.querySelectorAll('a');
		
		var d1=document.querySelector('.d');
	
		const d2=document.querySelector('.d2');
		const d3=document.querySelector('.d3');
		const d4=document.querySelector('.d4');
	
		const t1=document.querySelector('.t1');
		const t2=document.querySelector('.t2');
		const t3=document.querySelector('.t3');
		const t4=document.querySelector('.t4');
		const t5=document.querySelector('.t5');
	

		link.forEach(el => {
			el.addEventListener('click', () => {
				//langEl.querySelector('.active').classList.remove('active');
				//el.classList.add('active');

				const attr = el.getAttribute('language');

	
				d1.textContent =data[attr].d1;
				
				d2.textContent =data[attr].d2;
				d3.textContent =data[attr].d3;
				
				t1.textContent =data[attr].t1;
				t2.textContent =data[attr].t2;
				t3.textContent =data[attr].t3;
				t4.textContent =data[attr].t4;
			    t5.textContent =data[attr].t5;
				
				
				
				
			});
		});
		
		var data = {
			  "english": 
			  {
			    "title": "xenon",
				
				"d1": "here you can learn every thing that you need to start with html and css so late start",
				
				"d2" :"HTML (stands for Hypertext Markup Language) is a computer language that makes up most web pages and online applications. A hypertext is a text that is used to reference other pieces of text, while a markup language is a series of markings that tells web servers the style and structure of a document.HTML, or HyperText Markup Language,allows web users to create and structure sections, paragraphs, and links using elements, tags, and attributes. However, it’s worth noting that HTML is not considered a programming language as it can’t create dynamic functionality..",
				"d3" :"All HTML pages have a series of HTML elements, consisting of a set of tags and attributes. HTML elements are the building blocks of a web page. A tag tells the web browser where an element begins and ends, whereas an attribute describes the characteristics of an element. It is one of the most basic building blocks of every website, so it's crucial to learn if you want to have a career in web development.HTML determines the structure of web pages. This structure alone is not enough to make a web page look good and interactive. So you'll use assisted technologies such as CSS and JavaScript to make your HTML beautiful and add interactivity, respectively.",
				"d4" :"CSS (Cascading Style Sheets) allows you to create great-looking web pages, but how does it work under the hood? This article explains what CSS is with a simple syntax example and also covers some key terms about the language.CSS can be used for very basic document text styling — for example, for changing the color and size of headings and links. It can be used to create a layout — for example, turning a single column of text into a layout with a main content area and a sidebar for related information. It can even be used for effects such as animation. Have a look at the links in this paragraph for specific examples.",
				"t1" :"html and css course",
				"t2" :"what is html?",
				"t3" :"what is css?",
				"t4" :"html syntax",
				"t5":"Next >",
		
			  },
			  "amharic":
			  {
				  "title":"ዜነን",
				  "d1" :"እዚህ በጣም ዘግይቶ ለመጀመር በHTML እና CSS ለመጀመር የሚፈልጉትን ሁሉንም ነገር መማር ይችላሉ።",
				 
				  "d2" :"ኤችቲኤምኤል (Hypertext Markup Language ማለት ነው) አብዛኞቹን ድረ-ገጾች እና የመስመር ላይ መተግበሪያዎችን ያቀፈ የኮምፒውተር ቋንቋ ነው። hypertext ማለት ሌሎች ጽሑፎችን ለማጣቀስ የሚያገለግል ጽሑፍ ሲሆን የማርክ አፕ ቋንቋ ደግሞ የሰነዱን ዘይቤ እና አወቃቀሩን ለድር አገልጋዮች የሚነግሩ ማርክ ነው። ክፍሎችን፣ መለያዎችን እና ባህሪያትን በመጠቀም ክፍሎች፣ አንቀጾች እና አገናኞች። ሆኖም፣ ኤችቲኤምኤል ተለዋዋጭ ተግባርን መፍጠር ስለማይችል እንደ ፕሮግራሚንግ ቋንቋ እንደማይቆጠር ልብ ሊባል የሚገባው ጉዳይ ነው።",
				  "d3" :"ሁሉም የኤችቲኤምኤል ገፆች ተከታታይ የኤችቲኤምኤል አባሎች አሏቸው፣ የመለያዎች እና ባህሪያት ስብስብ ያካተቱ ናቸው። የኤችቲኤምኤል አባሎች የድረ-ገጽ መገንቢያ ናቸው። መለያ ለድር አሳሽ አንድ ኤለመንት የሚጀምርበት እና የሚያልቅበትን ይነግረዋል፣ ባህሪው ግን የአንድን ንጥረ ነገር ባህሪያት ይገልጻል። የእያንዳንዱ ድረ-ገጽ መሰረታዊ የግንባታ ብሎኮች አንዱ ነው፣ስለዚህ በድር ልማት ውስጥ ሙያ እንዲኖርዎት ከፈለጉ መማር በጣም አስፈላጊ ነው።HTML የድረ-ገጾችን አወቃቀር ይወስናል። ድረ-ገጽ ጥሩ እና መስተጋብራዊ እንዲሆን ለማድረግ ይህ መዋቅር ብቻውን በቂ አይደለም። ስለዚህ የእርስዎን HTML ቆንጆ ለማድረግ እና እንደቅደም ተከተላቸው መስተጋብርን ለመጨመር እንደ CSS እና JavaScript የመሳሰሉ የታገዘ ቴክኖሎጂዎችን ትጠቀማለህ።",
				  "d4" :"CSS (Cascading Style Sheets) በጣም የሚያምሩ ድረ-ገጾችን እንዲፈጥሩ ይፈቅድልዎታል፣ ግን በኮፈኑ ስር እንዴት ነው የሚሰራው? ይህ መጣጥፍ CSS ምን እንደሆነ በቀላል አገባብ ምሳሌ ያብራራል እንዲሁም ስለቋንቋው አንዳንድ ቁልፍ ቃላትን ይሸፍናል።CSS በጣም ለመሰረታዊ የሰነድ ጽሁፍ አቀማመጥ ጥቅም ላይ ሊውል ይችላል - ለምሳሌ የርዕሶችን እና አገናኞችን ቀለም እና መጠን ለመቀየር። አቀማመጥን ለመፍጠር ጥቅም ላይ ሊውል ይችላል - ለምሳሌ አንድ ነጠላ የጽሑፍ አምድ ወደ አቀማመጥ ከዋናው ይዘት ቦታ እና ከጎን አሞሌ ጋር ለተዛመደ መረጃ። እንደ አኒሜሽን ላሉ ተፅእኖዎች እንኳን ሊያገለግል ይችላል። ለተወሰኑ ምሳሌዎች በዚህ አንቀጽ ውስጥ ያሉትን ማገናኛዎች ተመልከት።",
				 
				  "t1" :"HTML እና CSS ኮርስ",
				  "t2" :"HTML ምንድን ነው?",
				  "t3" :"CSS ምንድን ነው?",
				  "t4" :"HTML አገባብ",
		          "t5":"ቀጣይ >",

			  }
			  
			 
			}
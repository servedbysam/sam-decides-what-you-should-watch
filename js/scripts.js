/*

----- PSEUDOCODE --------

Get userChoice for question1.
Limit possible answers based on day(M, T, W, Th, F, Su).
Get userChoice for question2.
If userChoice = sitcom, narrow possible outcomes to exclude dramas
Else if userChoice = drama, exclude sitcoms
Get userChoice for question3.
If userChoice = early, limit possible outcomes to shows airing before 9:30 p.m.
Else if userChoice = late, limit possible outcomes to shows airing after 9:00 p.m.
Get userChoice for question4.
If userChoice = no, don't allow results from cable networks.

Display result.

*/

/* ALSO

IDEA: I think i want to change the background to a photo from the resulting show. Am I getting to ambitious? Probably.

*/

function finish() {
	var n = 0;
	var results = [
    {   title: 'The Originals',
        desc: '<p>Everyone loves a good vampire show. They are not overdone. I promise</p><img src="http://i.imgur.com/tXTjD9k.jpg"/>'},
    {   title: 'The Blacklist',
        desc: '<p>James Spader uses the goverment as his personal hit squad.</p><img src="http://i.imgur.com/dipkE0v.jpg"/>'},
    {   title: 'The Big Bang Theory',
        desc: '<p>There is science to its hilarity.</p><img src="http://i.imgur.com/WXox0Yv.jpg"/>'},
    {   title: 'Jane The Virgin',
        desc: '<p>Gawker likes it.</p><img src="http://i.imgur.com/NH5cunw.png"/>'},
    {   title: 'The Flash',
        desc: '<p>We are all suckers for modern superhero shows.</p><img src="http://i.imgur.com/NH5cunw.png"/>'},
    {   title: 'Agents of S.H.I.E.L.D.',
        desc: '<p>Joss Whedon is a national treasure.</p><img src="http://i.imgur.com/tXTjD9k.jpg"/>'},
    {   title: 'Selfie',
        desc: '<p>Actually kind of cute.</p><img src="http://i.imgur.com/dipkE0v.jpg"/>'},
    {   title: 'The Mindy Project',
        desc: '<p>Get in touch with modern twenty-something women.</p><img src="http://i.imgur.com/WXox0Yv.jpg"/>'},
    {   title: 'Chicago P.D.',
        desc: '<p>Dick Clark can write something other than a procedural.</p><img src="http://i.imgur.com/NH5cunw.png"/>'},
    {   title: 'Modern Family',
        desc: '<p>All those Emmys cannot be wrong.</p><img src="http://i.imgur.com/NH5cunw.png"/>'},
    {   title: 'Black-ish',
        desc: '<p>The current darling of sitcom reviewers.</p><img src="http://i.imgur.com/dipkE0v.jpg"/>'},
    {   title: 'Just watch ABC',
        desc: '<p>Shonda Rhimes has taken over Thursday nights and you should be as excited as I am.</p><img src="http://i.imgur.com/WXox0Yv.jpg"/>'},
    {   title: 'Bad Judge',
        desc: '<p>Legal comedy plus Kate Walsh. This gay justice-junkies televised wet dream.</p><img src="http://i.imgur.com/NH5cunw.png"/>'},
    {   title: 'Grimm',
        desc: '<p>It suprised everyone once and it is still on the air.</p><img src="http://i.imgur.com/NH5cunw.png"/>'},
    {   title: 'Constantine',
        desc: '<p>Apparently turning 2000-era movies into TV shows works.</p><img src="http://i.imgur.com/tXTjD9k.jpg"/>'},
    {   title: 'Whose Line',
        desc: '<p>AISHA TYLER. duh.</p><img src="http://i.imgur.com/dipkE0v.jpg"/>'},
    {   title: 'Once Upon A Time',
        desc: '<p>Yeah, the addition of Frozen is probably jumping the shark . . .</p><img src="http://i.imgur.com/WXox0Yv.jpg"/>'},
    {   title: 'The Good Wife',
        desc: '<p>Kalindas last season, what?!</p><img src="http://i.imgur.com/NH5cunw.png"/>'},
    {   title: 'Brooklyn Nine-Nine',
        desc: '<p>Because Gina is my spirit animal.</p><img src="http://i.imgur.com/NH5cunw.png"/>'}];
    var resultContainer = $('#result');
	var nums = new Array(20);
	for(var i = 0; i < nums.length; i++) nums[i] = 0;
	for(var i = 1; i <= 4; i++) {
		var q = document.forms['quiz'].elements['question_'+i];
		if(q[0].type=='checkbox') {
			var n = 0;
		}
		for(var j = 0; j < q.length; j++) {
			if(q[j].checked) {
				var a = q[j].value.split(',');
				for(var k = 0; k < a.length; k++) {
					nums[a[k]]++;
				}
				if(q[j].type=='radio') break;
				else n++;
			}
			if(j == q.length-1&&q[j].type=='radio') {nums[0]++;}
		}
		if(q[0].type=='checkbox'&&((document.forms['quiz'].elements['question_'+i+'_min']&&n<document.forms['quiz'].elements['question_'+i+'_min'].value)||(document.forms['quiz'].elements['question_'+i+'_max']&&n>document.forms['quiz'].elements['question_'+i+'_max'].value))) nums[0]++;
	}
	var j = new Array('0');
	for (i in nums) if(nums[i]>nums[j[0]]){j=new Array(''+i);} else if(nums[i]==nums[j[0]])j[j.length] = i;
	//var o = '';for(var i in results)o+=results[i]+'='+nums[i]+'\n';
	//alert(o);
	if(nums[0]!=0) {
		alert('You missed or incorrectly answered '+nums[0]+' questions!');
	}
	else if(j[0]==0) {
		alert('No result could be determined.');
	}
	else {
			Math.max.apply

			resultContainer.html("<h1>" + results[n].title + "</h1><br><p class='desc'>" + results[n].desc + "</p>");
            return;
        }
	}

var english = {};

// menu
english.menu = {};
english.menu.home = "Home";
english.menu.speakers = "Speakers";
english.menu.schedule = "Schedule";
english.menu.location = "Location";
english.menu.language = "Français";
english.menu.language_link = "/fr";

// Banner
english.banner = {};
english.banner.title = 'The Machine Learning Week';
english.banner.teaser = 'Invest 5 days to understand the foundations of machine learning.';
english.banner.description = "Our guiding principles for the week are two: \n\nBe practical.  You'll leave with a good understanding of the major principles of machine learning.  You'll have real experience with some major ML libraries and with code examples that you wrote yourself during the course. <br><br> No hard math.  We know that for most of us, university maths courses were a while ago.  No worries!  Our goal is to get you up to speed as quickly as possible.  We emphasize intuition over theory, but you'll know enough theory to know what you're doing. <br><br> So what won't you be able to do?  Academic research will still be out of your reach.  You won't be reading to write scientific papers.  We hope you'll agree that that's an ok trade-off for coming up to speed in four days! <br><br> At the end of the week, you'll know enough to do some basic work, but, more important, you'll understand the language and principles well enough to learn more and tackle more complex problems.  The course fee includes admission to the Google Developer Group's DevFest, which includes a track of talks by expert Machine Learning practitioners.";

// speakers
english.speakers = {};
english.speakers.title="Speakers";
english.speakers.sp1 = {};
english.speakers.sp1.fullname = "Jeff Abrahamson";
english.speakers.sp1.avatar = "https://pbs.twimg.com/profile_images/3176479924/1bb83d535b54c80859ea70c15b83fd81.jpeg";
english.speakers.sp1.blog = "http://jeff.purple.com/";
english.speakers.sp1.twitter = "https://twitter.com/jeff_abrahamson";
english.speakers.sp1.job_title = "Chief Scientist, Jellybooks";
english.speakers.sp1.job_url = "http://jellybooks.com/";
english.speakers.sp2 = {};
english.speakers.sp2.fullname = "Rossi Oddet";
english.speakers.sp2.avatar = "http://blog.roddet.com/images/photo.jpeg";
english.speakers.sp2.blog = "http://www.dev-institut.fr";
english.speakers.sp2.twitter = "https://twitter.com/rossioddet";
english.speakers.sp2.job_title = "DEV INSTITUT";
english.speakers.sp2.job_url = "http://www.dev-institut.fr";

// schedule
english.schedule = {};
english.schedule.title = "Schedule";
english.schedule.details = "We'll use python as our illustrative language.  If you're a fan of python, you'll fit right in. If you don't know python yet, fear not, we won't be using advanced features of the language, and we'll be sure to provide you with enough background material before the course so that an hour or two of straight-forward pre-work will have you up to speed.";
english.schedule.part1 = {};
english.schedule.part1.title = "Introduction";
english.schedule.part1.step1_title = "Basic principles, math review";
english.schedule.part1.step1_details = "Coming soon...";
english.schedule.part1.step2_title = "Linear regression";
english.schedule.part1.step2_details = "Coming soon...";
english.schedule.part1.step3_title = "Logistic regression";
english.schedule.part1.step3_details = "Coming soon...";
english.schedule.part1.step4_title = "Support vector machines";
english.schedule.part1.step4_details = "Coming soon...";
english.schedule.part1.step5_title = "Neural networks and deep learning";
english.schedule.part1.step5_details = "Coming soon...";
english.schedule.part1.step6_title = "Dimensionality reduction";
english.schedule.part1.step6_details = "Coming soon...";
english.schedule.part1.step7_title = "Anomaly detection";
english.schedule.part1.step7_details = "Coming soon...";
english.schedule.part1.step8_title = "Techniques for large data sets";
english.schedule.part1.step8_details = "Coming soon...";
english.schedule.part2 = {};
english.schedule.part2.title = "SPECIAL TOPICS"
english.schedule.part2.step1_title = "Image recognition";
english.schedule.part2.step1_details = "Coming soon...";
english.schedule.part2.step2_title = "Understanding text";
english.schedule.part2.step2_details = "Coming soon...";
english.schedule.part2.step3_title = "Recommender systems";
english.schedule.part2.step3_details = "Coming soon...";
english.schedule.see_details = "See details";
english.schedule.see_details_action = "/schedule-details";

// schedule_details
english.schedule_details = {};
english.schedule_details.day1 = "Monday";
english.schedule_details.day2 = "Tuesday";
english.schedule_details.day3 = "Wednesday";
english.schedule_details.day4 = "Thursday";
english.schedule_details.day5 = "Friday";

// buy_tickets
english.buy_tickets = {};
english.buy_tickets.title = 'Buy Tickets';
english.buy_tickets.early_bird = {};
english.buy_tickets.early_bird.text = 'Early Bird';
english.buy_tickets.early_bird.deadline = 'Deadline : August 15, 2015';
english.buy_tickets.early_bird.price = '€1700';
english.buy_tickets.early_bird.button = 'buy ticket';
english.buy_tickets.early_bird.promo = 'save 30%';
english.buy_tickets.standard = {};
english.buy_tickets.standard.text = 'Standard Ticket';
english.buy_tickets.standard.deadline = '&nbsp;';
english.buy_tickets.standard.price = '€2500';
english.buy_tickets.standard.button = 'buy ticket';
english.buy_tickets.standard.promo = 'new';

// contacts
english.contacts = {};
english.contacts.location = "Location";
english.contacts.address = {};
english.contacts.address.title = 'Address';
english.contacts.address.details = "33 Rue de la Rosière d'Artois <br> 44100 Nantes France";
english.contacts.email = {};
english.contacts.email.title = 'Email Address';
english.contacts.email.details = "jeff@ml-week.com";
english.contacts.phone = {};
english.contacts.phone.title = 'Phones';
english.contacts.phone.english = "English : +33 6 24 40 01 57";
english.contacts.phone.french = "French : +33 6 58 84 73 94";

// mailing_list
english.mailing_list = {};
english.mailing_list.join = "Join Mailing List:";
english.mailing_list.name = "Name";
english.mailing_list.email = "Email Address";
english.mailing_list.submit = "Submit";
english.mailing_list.okmsg = "Thank you for joining us!";
english.mailing_list.komsg = "Please check your name and your email!";

// footer
english.footer = {};
english.footer.copyright = "© Copyright ML Week. All Rights Reserved."


hexo.extend.helper.register('english', function() { return english; });

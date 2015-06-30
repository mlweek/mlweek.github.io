var english = {};

// Banner
english.banner = {};
english.banner.title = 'The Machine Learning Week';
english.banner.teaser = 'Invest 5 days to understand the foundations of machine learning.';
english.banner.description = "Our guiding principles for the week are two: \n\nBe practical.  You'll leave with a good understanding of the major principles of machine learning.  You'll have real experience with some major ML libraries and with code examples that you wrote yourself during the course. <br><br> No hard math.  We know that for most of us, university maths courses were a while ago.  No worries!  Our goal is to get you up to speed as quickly as possible.  We emphasize intuition over theory, but you'll know enough theory to know what you're doing. <br><br> So what won't you be able to do?  Academic research will still be out of your reach.  You won't be reading to write scientific papers.  We hope you'll agree that that's an ok trade-off for coming up to speed in four days! <br><br> At the end of the week, you'll know enough to do some basic work, but, more important, you'll understand the language and principles well enough to learn more and tackle more complex problems.  The course fee includes admission to the Google Developer Group's DevFest, which includes a track of talks by expert Machine Learning practitioners.";

// buy_tickets
english.buy_tickets = {};
english.buy_tickets.title = 'Buy Tickets';
english.buy_tickets.early_bird = {};
english.buy_tickets.early_bird.text = 'Early Bird';
english.buy_tickets.early_bird.deadline = 'Deadline : August 15, 2015';
english.buy_tickets.early_bird.price = '€1700';
english.buy_tickets.early_bird.button = 'buy ticket';
english.buy_tickets.early_bird.button = 'save 30%';
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



hexo.extend.helper.register('english', function() { return english; });

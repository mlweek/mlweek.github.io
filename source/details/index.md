title: Training Details
layout: page
---
# Format
Good machine learning practitioners define problems before tackling them.  This course is no exception.  Our goal is to review the main techniques available for learning from data using python-based tools.  Why python?  Because there are some good tools available and because, whether or not you already know python, we can help you learn enough to do the course and so learn the main material.
We’ll divide days into morning and afternoon, and each of those we’ll divide into before the snack break and after the snack break.  And in each of those sections, we’ll spend about half of our time talking about algorithms and computer science and the other half actually building machine learning models using python, scikit-learn, and a handful of other convenient and useful tools.
Our goals with these tools isn’t to make you an expert in their use -- we don’t have the time it takes for that.  Our goal is to get you going so that you can attack the problems you face in your professional life and start making rapid progress.  Understanding how to set up and approach a problem will help you get going no matter what language you use in your professional life.

# Monday morning.

## Basic principles, math review
What is machine learning?  We’ll discuss the broad strokes of the subject in order to understand how to approach different problems: supervised and unsupervised learning, reinforcement learning, linear and non-linear classifiers.  How do we transform real-world problems into the formalisms that permit us to apply machine learning and use computers to solve problems?
We’ll follow with a quick review of probability, statistics, and linear algebra.  Our focus is on intuition, so no worries if this was hard at university: we'll draw some pictures and get you painlessly up to speed!

## Linear regression
Model the relationship between real-valued variables.  Use the model to predict unknown values and to understand the strength of your prediction.  When it comes to modeling continuous variables, linear regression is often the first tool to use, and simple variations of it address a surprisingly large array of problems.

![Linear Regression](https://upload.wikimedia.org/wikipedia/commons/3/3a/Linear_regression.svg)
![Polyreg_scheffe](https://upload.wikimedia.org/wikipedia/commons/8/8b/Polyreg_scheffe.svg)

Image source: Wikimedia Commons

# Monday afternoon

## Logistic regression
Logistic regression is a work horse of machine learning and with minor variations will take us all the way to neural networks and deep learning.  It is a probabilistic model for separating (distinguishing) categorical variables.  We build separators in order to predict or classify.  Examples include predicting disease, elections, and engineering failures (exploding rockets, …).

Source: http://www.cs.cmu.edu/~ggordon/IRLS-example/

## Support Vector Machines (SVM)
On the road from logistic regression to neural networks, an extraordinarily useful tool is the support vector machine, also known as a large margin classifier. Until very recently, SVM was the best known technique for many tasks, among them handwriting recognition (which we will revisit during Special Topics Day on Thursday).  We’ll finish our day Monday be looking at how this algorithm works and what we can do with it.
![Linear-svm-scatterplot](https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Linear-svm-scatterplot.svg/720px-Linear-svm-scatterplot.svg.png)
![Kernel_Machine](https://upload.wikimedia.org/wikipedia/commons/1/1b/Kernel_Machine.png)

Source: WikiMedia Commons

# Tuesday morning

## SVM (from Monday)

### Clustering
Data rarely comes adequately labeled.  Clustering provides techniques for grouping data for further analysis.  Often we use clustering as an exploratory technique to help us form hypotheses about our data.  We’ll see cluster analysis again when we discuss anomaly detection on Wednesday.
![KMeans-Gaussian](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/KMeans-Gaussian-data.svg/434px-KMeans-Gaussian-data.svg.png)
![SLINK-Gaussian](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/SLINK-Gaussian-data.svg/434px-SLINK-Gaussian-data.svg.png)
Source: WikiMedia Commons

# Tuesday afternoon

## Neural networks
If brains can think, perhaps machines that look like brains can think.  With that reasoning, computer science researchers in the mid-20th century embarked on a program of research that resulted in a family of algorithms that we call artificial neural networks.  We’ll talk about what artificial neural networks are, what they can do, what they can’t do, and why they’ve recently become quite fashionable.
Of course, we’ll build some simple neural networks, train them, and use them to classify some data.


# Wednesday morning

## Deep learning
In the last decade, neural networks have achieved some remarkable successes, from image search to voice recognition (Siri, Google Now, etc.).  The advances that have lead to this sea change mostly fall under the appellation “deep learning”.  We’ll discuss what that means and build some simple examples.
![Artificial_neural_network](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Artificial_neural_network.svg/560px-Artificial_neural_network.svg.png)
Source: WikiMedia Commons

# Wednesday afternoon

## Dimensionality reduction
Machine learning walks hand in hand with Big Data.  Data can be big not only because we have a lot of it, but because it is wide, that is, embedded in very highly dimensional spaces.  Dimensionality reduction gives us tools for finding the components of our data that matter most and -- good for us -- help us to run our programs faster.
![GaussianScatterPCA](https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/GaussianScatterPCA.png/512px-GaussianScatterPCA.png)

## Anomaly Detection
Algorithms can be classified as online or offline, according to whether we can look at all the data (offline) or merely examine a stream of data as it passes (online).  A common concern in online data is identifying outliers, sometimes when we don’t know very much about what the outliers will look like.  For example, we might want to watch our server logs for unusual events so that we can explore further.

## Large Data
When data sets become quite large, we sometimes have to adopt special techniques to deal with the size.  This can be quite time consuming (because the data is so big!), but we’ll nonetheless talk about some approaches so that you aren’t stymied when your data grows large.

# Thursday: Special Topics
These are all topics that have advanced enormously in the past decade.  We’ll talk about how they used to look and how they look now, so if you find yourself talking to someone not current in the field, you’ll know how to respond.

## Image recognition
We’ll do a quick survey of some of the main techniques for image recognition, then we’ll build an image classifier.

## Handwriting recognition
We’ll talk about some of the principle means for identifying handwriting (and what the issues and trade-offs are), then we’ll build a tool to identify handwritten text.

## Understanding text
What can we say about text?  We’ll look at summarization, sentiment analysis, and a few other features based on how much time we have and what our interest level is.

## Detecting spam
Spam detection is one of the canonical examples of machine learning.  So we’ll have a look, then we’ll build a spam classifier.

## Recommender systems
Recommendation is more than just Amazon offering to sell you things.  It’s also the articles in your social media feeds and search results everywhere.  We’ll have a look at the major techniques for recommendation (including Amazon’s techniques).  And then we’ll build a recommender.

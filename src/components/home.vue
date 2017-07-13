<template>
    <div class="container-fluid">
        <!-- Carousel ================================================== -->
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <img class="first-slide" src="../images/expo.jpg" alt="First slide">
                    <div class="container">
                        <div class="carousel-caption">
                            <h1 style="text-shadow: 1px 1px 2px black, 0 0 25px #53acf5, 0 0 5px #114481">Welcome to the new digital logic solution.</h1>
                            <p style="text-shadow: 1px 1px 2px black, 0 0 25px #53acf5, 0 0 5px #114481">An app with no downloads and plenty of features to help students and other professionals learn and apply the concepts in digital logic design.</p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <img class="second-slide" src="../images/expo2.jpg" alt="Second slide">
                    <div class="container">
                        <div class="carousel-caption">
                            <h1 style="text-shadow: 1px 1px 2px black, 0 0 25px #53acf5, 0 0 5px #114481">Version 1.0.0 has been released!</h1>
                            <p style="text-shadow: 1px 1px 2px black, 0 0 25px #53acf5, 0 0 5px #114481">See the details of what's new below.</p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <img class="third-slide" src="../images/chip-02.jpg" alt="Third slide">
                    <div class="container">
                        <div class="carousel-caption">
                            <h1 style="text-shadow: 1px 1px 4px black, 0 0 25px #53acf5, 0 0 5px #114481">A comprehensive, convenient digital logic suite.</h1>
                            <p style="text-shadow: 1px 1px 4px black, 0 0 25px #53acf5, 0 0 5px #114481">Binary arithmetic, truth tables, karnaugh maps, circuit design, and more. An ever-evolving application with a clean UI and no download required.</p>
                        </div>
                    </div>
                </div>
            </div>
            <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div><!-- /.carousel -->

        <!-- Marketing messaging and featurettes
        ================================================== -->
        <!-- Wrap the rest of the page in another container to center all the content. -->

        <div class="container marketing">

            <!-- Three columns of text below the carousel -->
            <div class="row">
                <div class="col-lg-4">
                    <img class="img-circle" src="../images/circle_3.jpg" alt="Generic placeholder image" width="140" height="140">
                    <h2>New to Digital Logic?</h2>
                    <p>No problem! This site has a reference section that includes helpful links for beginners to learn the fundamentals of digital logic, as well as helpful resources regarding logic gates, boolean theorems, binary arithmetic rules, and more!</p>
                    <p><a class="btn btn-default" href="src/views/references.html" role="button">View References &raquo;</a></p>
                </div><!-- /.col-lg-4 -->
                <div class="col-lg-4">
                    <img class="img-circle" src="../images/circle_1.png" alt="Generic placeholder image" width="140" height="140">
                    <h2>Want More Features?</h2>
                    <p>Make a request at <a href="https://github.com/SBarber95/Digital-Logic-App/issues">GitHub</a> or think about becoming a contributor yourself by writing the code and submitting a pull request! All are welcome to make improvements! There's no need to be an expert, just know some HTML, CSS, and JavaScript.</p>
                    <p><a class="btn btn-default" href="https://github.com/SBarber95/Digital-Logic-App/" role="button">Contribute! &raquo;</a></p>
                </div><!-- /.col-lg-4 -->
                <div class="col-lg-4">
                    <img class="img-circle" src="../images/circle_2.png" alt="Generic placeholder image" width="140" height="140">
                    <h2>Found a Bug?</h2>
                    <p>Open up an issue in <a href="https://github.com/SBarber95/Digital-Logic-App/issues">GitHub</a>. Please note as of version 1.0.0 (first release), the app is not fully functional as some features still need to be completely implemented (and there will be bugs for sure). See below for more details.</p>
                    <p><a class="btn btn-default" href="https://github.com/SBarber95/Digital-Logic-App/issues" role="button">Open Issue &raquo;</a></p>
                </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->

            <!-- START THE FEATURETTES -->

            <hr class="featurette-divider">

            <div class="row featurette">
                <div class="col-md-7">
                    <h2 class="featurette-heading">New Features in Version 1.0.0</h2>
                    <p class="lead">1.0.0 was the first release, so many features were added!<ul>
                    <li>Min/Maxterm generator (3 and 4 variable truth tables)</li>
                    <li>3 and 4 variable karnaugh maps (at ~90% accuracy)</li>
                    <li>Counter designs (S-R, J-K, T, D) Note: Karnaugh Maps at 90% accuracy</li>
                    <li>Binary arithmetic calculator and quizzer (+,-,*)</li>
                    <li>Conversion calculator and quizzer from base 2, 8, 10, and 16</li>
                    <li>IEEE floating point converter</li>
                    <li>Circuit designer (with basic simulations)</li>
                    <li>References for boolean theorems, logic gates, and binary arithmetic rules</li>
                </ul></p>
                </div>
                <div class="col-md-5">
                    <img class="featurette-image img-responsive center-block" data-src="holder.js/500x500/auto" src="../images/expo500_1.jpg" alt="Generic placeholder image">
                </div>
            </div>

            <hr class="featurette-divider">

            <div class="row featurette">
                <div class="col-md-7 col-md-push-5">
                    <h2 class="featurette-heading">Upcoming Features and Bug Fixes</h2>
                    <p class="lead">This section will be updated with upcoming features and fixes that will make their way to the next version of the application!</p>
                </div>
                <div class="col-md-5 col-md-pull-7">
                    <img class="featurette-image img-responsive center-block" data-src="holder.js/500x500/auto" src="../images/expo500_4.jpg" alt="Generic placeholder image">
                </div>
            </div>

            <hr class="featurette-divider">

            <div class="row featurette">
                <div class="col-md-7">
                    <h2 class="featurette-heading">About Sovereign Logic</h2>
                    <p class="lead">It all began with an undergraduate and a requirement to build a beneficial piece of software.
                        Digital logic design is a class required in many computer science programs, but CS students don't tend to favor hardware studies.
                        The homework is tedious, and just one mistake while working out a problem can lead to hours of extra work.  This application's
                        goal is to make this type of work easier for students to complete, while also providing study opportunities that will lead
                        to better grades.</p>
                </div>
                <div class="col-md-5">
                    <img class="featurette-image img-responsive center-block" data-src="holder.js/500x500/auto" src="../images/expo500_3.jpg" alt="Generic placeholder image">
                </div>
            </div>

            <hr class="featurette-divider">

            <!-- /END THE FEATURETTES -->

            <!-- FOOTER -->
            <footer>
                <p class="pull-right"><a href="#">Back to top</a></p>
                <p>2017 Sovereign Logic &middot;</p>
            </footer>

        </div><!-- /.container -->
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
    .navbar {
        font-size: 18px;
    }
    .dropdown-menu {
        font-size: 16px;
    }
    .icon-bar {
        float: left;
        display: inline-block;
        width: 50px;
        height: 50px;
    }

    .btn-default {
        color: white;
    }

    .caret {
        margin-left: 4px;
    }
</style>
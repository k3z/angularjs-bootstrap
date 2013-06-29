Angularjs-bootstrap is a little boilerplate project mixing AngularJS, Bootstrap, jQuery, Bower and Grunt.


Prerequisite
------------

`Bower <https://github.com/bower/bower>`_ and `Grunt <http://gruntjs.com/getting-started>`_. depends on Node and npm.
`My blog post <http://www.k3z.fr/blog/post/5/automatisation-bower-grunt>`_ (in french) explain how to use Bower and Grunt in an web project.

* `NodeJS <http://nodejs.org/>`_
* `npm <http://npmjs.org/>`_


Installing Bower
^^^^^^^^^^^^^^^^

Bower is installed globally using npm:.

::

    $ npm install -g bower


Installing Grunt
^^^^^^^^^^^^^^^^

Install Grunt's command line interface (CLI). Grunt will be only installed in your project folder.

::

    $ npm install -g grunt-cli


Installing angularjs-bootstrap
------------------------------

Checkout the project.

::

    $ git clone https://github.com/k3z/angularjs-bootstrap.git


Run Bower to download dependencies

::

    $ cd <project-root>/
    $ bower install


Bower components are now in www/assets/components/


Run Grunt to initialize project

::

    $ cd <project-root>/
    $ npm install
    $ grunt


Development and production files are now in www/assets/build/


Grunt can observe you files and execute somme task automaticaly.

To run Grunt in background

::

    $ grunt watch


You can now build an AngularJS-Bootstrap project.

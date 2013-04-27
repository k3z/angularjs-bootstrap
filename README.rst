Angularjs-bootstrap is a litle boilerplate project mixing AngularJS, Bootstrap, jQuery, Bower and Grunt.


Prerequisite
------------

`Bower <https://github.com/bower/bower>`_ and `Grunt <http://gruntjs.com/getting-started>`_. depends on Node and npm.

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

Checkout the projetc.

::

    $ git clone https://github.com/k3z/angularjs-bootstrap.git


Run Bower to download dependencies

::

    $ cd $ cd <project-root>/
    $ bower install


Bower components are now in www/assets/components/


Run Grunt to initialize project

::

    $ cd <project-root>/
    $ npm install
    $ grunt


Development and production files are now in www/assets/build/


You can now build an AngularJS-Bootstrap project.
# make-fullstack-app

With mfa, you can scaffold out a backend API application and a frontend application with a simple command and select from a variety of templates. If not template selected it will default to a basic express and react template. The result is two new folders called backend and frontend.

`npx make-fullstack-app fastify vue`

The above commands would create a backend folder with a fastify app and frontend folder with a vue application.

**NOTE:** These scripts under the hood use degit, so no git repos are left behind after the cloning process.

## spinup

If you looking just to spinup on template at a time check out my merced-spinup tool on npm.

`npx merced-spinup react projectName`

### AVAILABLE TEMPLATES

#### Backend

- fastify
- koa
- polka
- apollo
- expressrest
- merver
- expresssocket
- expressmongo
- expresspg
- express

#### Frontend

- react
- angular
- vue
- svelte
- amponent
- mercedui
- renderblocks
- mblocks
- basicelement
- componentzoo
- superfunc
- funcomponent
- basicreact
- reactwebp
- reactrouter
- reactredux
- reactreducer
- jquerywebpack
- basichtml (basic html/css/js setup)
- reactts
- kofu
- vuehtml (vue with a script tag)
- reacthtml (react with a script tag)
- angularjs (AngularJS 1.8, LTS Support Ends 12/31/21)
- jqueryhtml (jquery with a script tag)
- reactrollup
- reactsassbootstrap
- reactsassmaterialui
- reactsasscontext
- reactstyled
- reactjss
- reactloaded
- plainwebpack
- plainrollup
- nextts (Next Static Site Generator with Typescript)
- reactparcel
- snowreactloaded

##### Snowpack Bundler FrontendTemplates (From Snowpacks Official Templates)

- snowpack
- snowreact
- snowreactts
- snowsvelte
- snowvue
- snowts
- snowlit
- snowlitts

(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{132:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/emails_big_picture-d34d31176029416f6e336e3f9b19a908.png"},81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return m}));var n=a(2),i=a(6),r=(a(0),a(90)),o={title:"Emails",slug:"/guides/emails"},c={unversionedId:"5_Guides/5_6_Emails",id:"5_Guides/5_6_Emails",isDocsHomePage:!1,title:"Emails",description:"Overview",source:"@site/docs/5_Guides/5_6_Emails.md",slug:"/guides/emails",permalink:"/symfony-boilerplate/docs/guides/emails",editUrl:"https://github.com/thecodingmachine/symfony-boilerplate/docs/5_Guides/5_6_Emails.md",version:"current",sidebar:"docs",previous:{title:"Lists",permalink:"/symfony-boilerplate/docs/guides/lists"},next:{title:"Files",permalink:"/symfony-boilerplate/docs/guides/files"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Symfony Mailer and Symfony Messenger",id:"symfony-mailer-and-symfony-messenger",children:[{value:"Configuration",id:"configuration",children:[]},{value:"Code",id:"code",children:[]},{value:"Twig templates",id:"twig-templates",children:[]}]}],l={rightToc:s};function m(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Emails overview",src:a(132).default})),Object(r.b)("h2",{id:"symfony-mailer-and-symfony-messenger"},"Symfony Mailer and Symfony Messenger"),Object(r.b)("p",null,"The API uses ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://symfony.com/doc/current/mailer.html"}),"Symfony Mailer")," for sending emails and\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://symfony.com/doc/current/messenger.html"}),"Symfony Messenger")," for doing it asynchronously."),Object(r.b)("p",null,"Two advantages come with this asynchronous process:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Sending emails does not slow your code execution."),Object(r.b)("li",{parentName:"ul"},"If one consumer cannot unstack the queue messages as fast as they arrive, you can add consumers on the fly to\nincrease the unstack rate.")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\ud83d\udce3 In your development environment, the API and the consumer are one; the ",Object(r.b)("inlineCode",{parentName:"p"},"make consume")," command starts the consumer\ninside the ",Object(r.b)("inlineCode",{parentName:"p"},"api")," service. In your remote environments (like production), the API and the consumer should be two\ndifferent services."))),Object(r.b)("h3",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"Most of the configuration comes from the following environment variables:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"MAILER_DSN"),": Data Source Name of the emails' server (format: ",Object(r.b)("inlineCode",{parentName:"li"},"protocol//user:password@hostname:port"),")."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"MESSENGER_TRANSPORT_DSN"),": Data Source Name of the Redis service (format: ",Object(r.b)("inlineCode",{parentName:"li"},"protocol//user:password@hostname:port/messages"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"MAIL_FROM_ADDRESS"),": email address of the sender (usually ",Object(r.b)("inlineCode",{parentName:"li"},"no-reply@your-domain.com"),")."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"MAIL_FROM_NAME"),": name of the sender (i.e., ",Object(r.b)("inlineCode",{parentName:"li"},"MAIL_FROM_NAME<MAIL_FROM_ADDRESS>"),").")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\ud83d\udce3 The Symfony parameters ",Object(r.b)("inlineCode",{parentName:"p"},"app.mail_from_address")," and ",Object(r.b)("inlineCode",{parentName:"p"},"app.mail_from_name")," take their values from the last two\nenvironment variables. The ",Object(r.b)("em",{parentName:"p"},"src/api/src/UseCase/CreateEmail.php")," use case reads these parameters to fill the\n",Object(r.b)("inlineCode",{parentName:"p"},"from")," property from the email - more on that in the next chapter."))),Object(r.b)("h3",{id:"code"},"Code"),Object(r.b)("p",null,"We provide the abstract class ",Object(r.b)("em",{parentName:"p"},"src/api/src/UseCase/CreateEmail.php"),".\nThis class has a method ",Object(r.b)("inlineCode",{parentName:"p"},"create"),", which takes the following arguments:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php",metastring:'title="src/api/src/UseCase/CreateEmail.php"',title:'"src/api/src/UseCase/CreateEmail.php"'}),"protected function create(User $user, string $subjectId, string $template, array $context): TemplatedEmail\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A recipient - ",Object(r.b)("em",{parentName:"li"},"src/api/src/Domain/Model/User.php"),"."),Object(r.b)("li",{parentName:"ul"},"A translation key for the email's subject (see ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"i18n"}),"i18n")," guide for more details)."),Object(r.b)("li",{parentName:"ul"},"A template's path (more on that in the next chapter)."),Object(r.b)("li",{parentName:"ul"},"The template's context (i.e., the data of the template).")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\ud83d\udce3 This class does only create an ",Object(r.b)("inlineCode",{parentName:"p"},"Email")," object (it does not send it.)."))),Object(r.b)("p",null,"You should extend this class to create your emails, for instance:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php",metastring:'title="src/api/src/UseCase/Foo/CreateFooEmail.php"',title:'"src/api/src/UseCase/Foo/CreateFooEmail.php"'}),"final class CreateFooEmail extends CreateEmail\n{\n    public function createEmail(\n        User $user,\n        string $foo,\n        string $bar\n    ): TemplatedEmail {\n        return $this->create(\n            $user,\n            'foo.subject',\n            'emails/foo.html.twig', # Don't forget to prefix the path with \"emails/\".\n            [\n                'foo' => $foo,\n                'bar' => $bar,\n            ]\n        );\n    }\n}\n")),Object(r.b)("p",null,"In the use case sending this email, you can inject both the previous class and the ",Object(r.b)("inlineCode",{parentName:"p"},"MailerInterface"),", i.e.:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php",metastring:'title="src/api/src/UseCase/Foo/DoFoo.php"',title:'"src/api/src/UseCase/Foo/DoFoo.php"'}),"private MailerInterface $mailer;\nprivate CreateFooEmail $createFooEmail;\n\npublic function __construct(\n    MailerInterface $mailer,\n    CreateFooEmail $createFooEmail\n) {\n    $this->mailer = $mailer;\n    $this->createFooEmail = $createFooEmail;\n}\n")),Object(r.b)("p",null,"You can then use them as below:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php",metastring:'title="src/api/src/UseCase/Foo/DoFoo.php"',title:'"src/api/src/UseCase/Foo/DoFoo.php"'}),"$email = $this->createFooEmail->createEmail($user, $foo, $bar);\n$this->mailer->send($email);\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\ud83d\udce3 Always put your classes extending ",Object(r.b)("inlineCode",{parentName:"p"},"CreateEmail")," on the same level as the use case requiring it.\nSee, for instance, the ",Object(r.b)("em",{parentName:"p"},"src/api/src/UseCase/User/ResetPassword.php")," use case."))),Object(r.b)("h3",{id:"twig-templates"},"Twig templates"),Object(r.b)("p",null,"The ",Object(r.b)("em",{parentName:"p"},"src/api/templates/emails")," folder contains the Twig templates of the emails."),Object(r.b)("p",null,"By default, all templates should extend the ",Object(r.b)("em",{parentName:"p"},"src/api/templates/emails/emails.html.twig")," template. "),Object(r.b)("p",null,"In other words, the templates should only contain the body of the email, while the ",Object(r.b)("em",{parentName:"p"},"emails.html.twig")," template contains\nthe wrapping elements (header, footer, etc.)."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\ud83d\udce3 Of course, you may update the ",Object(r.b)("em",{parentName:"p"},"emails.html.twig")," template."))),Object(r.b)("p",null,"Symfony provides the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://get.foundation/emails/docs/inky.html"}),"Inky")," framework that converts simple HTML tags into\nthe complex table HTML required for emails. For more details, you may also take a look at the\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://symfony.com/doc/current/mailer.html#inky-email-templating-language"}),"Symfony documentation"),"."),Object(r.b)("p",null,"If you want to add new CSS rules, put them in the ",Object(r.b)("em",{parentName:"p"},"src/api/assets/css/emails.css"),"."))}m.isMDXComponent=!0},90:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),m=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=m(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=m(a),d=n,u=p["".concat(o,".").concat(d)]||p[d]||b[d]||r;return a?i.a.createElement(u,c(c({ref:t},l),{},{components:a})):i.a.createElement(u,c({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<r;l++)o[l]=a[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);
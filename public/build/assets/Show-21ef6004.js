import{_ as p}from"./ViewerDash-121fddd0.js";import c from"./DeleteUserForm-55e3ce4b.js";import l from"./LogoutOtherBrowserSessionsForm-75259070.js";import{S as s}from"./SectionBorder-d14a1655.js";import f from"./TwoFactorAuthenticationForm-0e3be4be.js";import u from"./UpdatePasswordForm-25972286.js";import _ from"./UpdateProfileInformationForm-e23ebc20.js";import{c as d,w as n,o as e,a as i,e as r,b as t,f as a,F as h}from"./app-8eb1a515.js";import"./ResponsiveNavLink-281bcb72.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ActionSection-d5b7498c.js";import"./SectionTitle-fa51ee17.js";import"./DangerButton-ce080290.js";import"./DialogModal-d20072cd.js";import"./InputError-63c03bde.js";import"./SecondaryButton-2c785a5b.js";import"./TextInput-aa73f3dd.js";import"./ActionMessage-f92a50dd.js";import"./PrimaryButton-4515052e.js";import"./InputLabel-a7e46b91.js";import"./FormSection-a687f2aa.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},J={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,x)=>(e(),d(p,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[o.$page.props.jetstream.canUpdateProfileInformation?(e(),r("div",w,[t(_,{user:o.$page.props.user},null,8,["user"]),t(s)])):a("",!0),o.$page.props.jetstream.canUpdatePassword?(e(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(e(),r(h,{key:3},[t(s),t(c,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{J as default};
import{_ as p}from"./ViewerDash-ad771474.js";import c from"./DeleteUserForm-e63355b8.js";import l from"./LogoutOtherBrowserSessionsForm-a850be9f.js";import{S as s}from"./SectionBorder-5e12c2c8.js";import f from"./TwoFactorAuthenticationForm-ec9927a6.js";import u from"./UpdatePasswordForm-2bb82263.js";import _ from"./UpdateProfileInformationForm-9d2591df.js";import{c as d,w as n,o as e,a as i,e as r,b as t,f as a,F as h}from"./app-6dcd8200.js";import"./ResponsiveNavLink-394f382d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ActionSection-dbee0d93.js";import"./SectionTitle-fea06639.js";import"./DangerButton-7c2b28c3.js";import"./DialogModal-eaeaf730.js";import"./InputError-eb42db3b.js";import"./SecondaryButton-edea77ae.js";import"./TextInput-7e98612c.js";import"./ActionMessage-1ea15fbf.js";import"./PrimaryButton-48165602.js";import"./InputLabel-f1a23051.js";import"./FormSection-4e64dccf.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},J={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,x)=>(e(),d(p,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[o.$page.props.jetstream.canUpdateProfileInformation?(e(),r("div",w,[t(_,{user:o.$page.props.user},null,8,["user"]),t(s)])):a("",!0),o.$page.props.jetstream.canUpdatePassword?(e(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(e(),r(h,{key:3},[t(s),t(c,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{J as default};
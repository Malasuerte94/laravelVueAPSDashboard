import{_ as c}from"./AppLayout-c400eceb.js";import p from"./DeleteUserForm-c90f5248.js";import l from"./LogoutOtherBrowserSessionsForm-8af3d020.js";import{S as s}from"./SectionBorder-2872238a.js";import f from"./TwoFactorAuthenticationForm-512d9b33.js";import u from"./UpdatePasswordForm-8411f9f1.js";import _ from"./UpdateProfileInformationForm-47b8bd07.js";import{c as d,w as n,o,a as i,e as r,b as t,f as a,F as h}from"./app-2dff62df.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DialogModal-99e2ab13.js";import"./SectionTitle-b9fa7b68.js";import"./DangerButton-1ba678f6.js";import"./TextInput-21f53396.js";import"./SecondaryButton-505115ac.js";import"./ActionMessage-d0b29d20.js";import"./PrimaryButton-b2d4bcd7.js";import"./InputLabel-5211648f.js";import"./FormSection-29f6670d.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},z={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),d(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(_,{user:e.$page.props.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{z as default};

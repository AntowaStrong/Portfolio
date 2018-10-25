
import ContactsComponent from "../components/ContactsComponent.vue";
import InfoComponent from "../components/InfoComponent.vue";
import ProjectsComponent from "../components/ProjectsComponent.vue";

export default {
    menu: [
        {next: null, prev: null, position: 0, active: false, name: 'Info', component: InfoComponent},
        {next: null, prev: null, position: 1, active: false, name: 'Projects/Works', component: ProjectsComponent},
        {next: null, prev: null, position: 2, active: false, name: 'Contacts', component: ContactsComponent}
      ],

 }
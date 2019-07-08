import React from 'react'

export default class AddressTable extends React.Component {


    addAddress = (newAddress) => {
        this.setState((prevState) => {
            return { 
                locations: prevState.locations.concat({ address:'This is a new address', latitude:0, longitude:0})
            }
        })
    }

    lookForKey = (e) => {
        console.log(e)
    }

        render() {
            return (
                <div className="container">
                <div className="row">
            <h1>This is the Dashboard</h1>
            <p>Cras eu magna pretium, accumsan nunc ac, hendrerit purus. Aliquam dictum, risus id hendrerit bibendum, diam felis luctus velit, ac dapibus turpis mauris ac lorem. Pellentesque venenatis magna nibh, sed bibendum neque laoreet eu. Praesent lorem eros, venenatis eu tincidunt sed, condimentum nec mi. Curabitur cursus est non tempus lobortis. Integer ac odio in eros aliquet cursus. Fusce ultricies lacus a tincidunt porta. Nunc sed sapien viverra, venenatis tortor et, gravida lorem. Praesent vehicula, neque id laoreet vehicula, lectus libero commodo enim, et tristique tellus mi non sapien. Donec sit amet semper purus, et sodales leo. Mauris pulvinar condimentum pulvinar. Nulla facilisi.</p>                
            <p>Suspendisse sollicitudin, felis eget vestibulum semper, eros neque accumsan lectus, ut maximus justo risus eu felis. Nullam sagittis posuere nisi, et bibendum ex consectetur ut. Suspendisse vel luctus augue, a congue nulla. Donec congue elit et erat varius pretium. Aliquam erat volutpat. Vivamus porttitor purus ipsum, a convallis nunc ornare sed. Pellentesque id rutrum metus. Donec et nunc ac augue fringilla feugiat eu vitae nisi. In viverra ligula nunc, vitae ornare sapien finibus hendrerit. Donec nec dui vestibulum, mattis tellus vel, aliquam purus. Cras congue ac est sed tempus.</p>
            <p>Nam elementum mollis justo nec porttitor. Vestibulum semper est dui, quis scelerisque ipsum bibendum vitae. Mauris luctus lorem vitae ex ultricies, in pretium nulla elementum. Sed iaculis elit quis tortor dignissim ornare. Cras vehicula, diam sed commodo eleifend, nisl dolor bibendum eros, at pretium enim odio eu leo. Integer commodo eros varius justo tristique consequat. Maecenas mollis rhoncus nibh, vitae iaculis ipsum aliquam in. Pellentesque imperdiet luctus dictum. Nam quis scelerisque urna. Ut ipsum est, condimentum nec lacus ut, vestibulum ultricies est. Nullam iaculis pulvinar tincidunt. Ut risus lectus, feugiat a dignissim id, feugiat nec lacus. Nulla et egestas mauris. Suspendisse potenti.</p>

            </div>
            </div>
    
            );
      }

 }






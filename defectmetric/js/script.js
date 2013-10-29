YUI().use('node', 'event-touch', function(Y) {
    var onClick = function(e) {
        console.log('hwyyy'+e.preventDefault());
        e.preventDefault();
        var item = e.currentTarget,
            list2 = Y.one('#domainduplicate');

        if (item.get('parentNode') === list2) { // remove if click is in the cart
            // remove from cart only if it's not the cart header
            if (item.hasClass('domaindup') === false) {
                item.remove(); // sugar for item.get('parentNode').removeChild(item);
            }
        } else { // else add a clone of the clicked item to the cart
            list2.append(item.cloneNode(true));
        }
    };

    var onClickGraph = function(e){
    	e.preventDefault();
    	var item = e.currentTarget,
    		listgraph = Y.one('#graphduplicate');
    	if(item.get('parentNode') === listgraph){
    		if(item.hasClass('graphdup') === false){
    			item.remove();
    		}
    	} else{
    		listgraph.append(item.cloneNode(true));
    	}
    };

    Y.one('#domain').delegate('click', onClick, 'option');
    Y.one('#domain').delegate('touchstart', onClick, 'option');
    Y.one('#domainduplicate').delegate('click', onClick, 'option');
    Y.one('#domainduplicate').delegate('touchstart', onClick, 'option');
   
    Y.one('#graph').delegate('click', onClickGraph, 'option');
    Y.one('#graph').delegate('touchstart', onClickGraph, 'option');
    Y.one('#graphduplicate').delegate('click', onClickGraph, 'option');
    Y.one('#graphduplicate').delegate('touchstart', onClickGraph, 'option');
});


function sendform(){

var r=confirm("  Please confirm ");
if (r==true)
  {
  return true;
  }
else
  {
return false;
}
  }

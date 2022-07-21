const jsonData = require('./data/data_test.json');

/**
 * ### Final output
 * ```json
 * [
 *   {
 *      profile_name: 'CBC', 
 *      profile_detail: [
 *          {lab_items_name: 'Spherocyte' },
 *          {lab_items_name: 'Spherocyte' },
 *          {lab_items_name: 'Spherocyte' },
 *     ]
 *   },
 *   {
 *      profile_name: 'CBC', 
 *      profile_detail: [
 *          {lab_items_name: 'Spherocyte' },
 *          {lab_items_name: 'Spherocyte' },
 *          {lab_items_name: 'Spherocyte' },
 *     ]
 *   }
 * ]
 * ```
 */
function reformatArray(inputData)
{
    let data = [];
    let prevItem = null;

    inputData.map((item) => {
        if(!Boolean(prevItem))
        {
            if(data.length === 0)
            {
                data.push({
                    profile_name: item['lab_profile_name'], 
                    profile_detail: [{lab_items_name: item['lab_items_name']}]
                });
            }
            // names[item.name].push(item);
        }else if(prevItem['lab_profile_name'] !== item['lab_profile_name'])
        {
            data.push({
                profile_name: item['lab_profile_name'], 
                profile_detail: [{lab_items_name: item['lab_items_name']}]
            });
        }
        
        else{
            if(prevItem['lab_profile_name'] === item['lab_profile_name'])
            {
                if(data.length > 0)
                {
                    // names[item.name].push(item);
                    const existData = data.find(d => d['profile_name'] === item['lab_profile_name']);
                    // console.log(existData['profile_detail']);
                    existData['profile_detail'].push({lab_items_name: item['lab_items_name']});

                }
            }
        }
        prevItem=item;
    
        return item;
    });

    return data;
}

const data = reformatArray(jsonData);
// console.log(jsonData)
console.log(JSON.stringify(data));
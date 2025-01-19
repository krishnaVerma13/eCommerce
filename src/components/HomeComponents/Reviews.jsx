import user1 from "../../assets/ImageAndIcons/user1.png"
import user2 from "../../assets/ImageAndIcons/user2.png"
import user3 from "../../assets/ImageAndIcons/user3.png"
import user4 from "../../assets/ImageAndIcons/user4.png"
import comma from "../../assets/ImageAndIcons/commas.png"
function Reviews(){
    const arr=[
        {
            img:user1,
            review:"Working with dharma tech solution was a pleasure their team was dedicated and responsive...",
            user:"Alex Martin",
            position:"[CEO of PetConnect]",
            star:"⭐⭐⭐⭐⭐",
            comma_img:comma
        },
        {
            img:user2,
            review:"Working with dharma tech solution was a pleasure their team was dedicated and responsive...",
            user:"Alex Martin",
            position:"[CEO of PetConnect]",
            star:"⭐⭐⭐⭐⭐",
            comma_img:comma
        },
        {
            img:user3,
            review:"Working with dharma tech solution was a pleasure their team was dedicated and responsive...",
            user:"Alex Martin",
            position:"[CEO of PetConnect]",
            star:"⭐⭐⭐⭐⭐",
            comma_img:comma
        },
        {
            img:user4,
            review:"Working with dharma tech solution was a pleasure their team was dedicated and responsive...",
            user:"Alex Martin",
            position:"[CEO of PetConnect]",
            star:"⭐⭐⭐⭐⭐",
            comma_img:comma
        },
    ]
return(
    <div className=" flex p-6 w-full flex-wrap mt-8 ml-10">
    {
        arr.map((item,index)=>{
            return(
                    <div key={index} className=" w-[310px]  ml-5 mt-3 p-5 bg-white rounded-2xl">
        <div className=" p-1 rounded-2xl grid h-32">
        <img 
        src={item.comma_img}
        className="h-20 mx-auto my-10"
        />
        </div>
        <h2 className="font-bold text-lg mt-2 text-center">{item.review} </h2>
        <h2 className="font-bold text-lg mt-2 text-center">{item.star} </h2>
        <div className=" p-1 rounded-2xl grid h-32">
        <img 
        src={item.img}
        className="h-20 mx-auto my-10"
        />
        </div>
        <h2 className="font-bold text-lg mt-2 text-center">{item.user} </h2>
        <h2 className="text-sm mt-2 text-center">{item.position} </h2>
    </div>
            )
        })
    }
    
</div>
)
}
export default Reviews
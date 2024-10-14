import { Link } from "react-router-dom";
import placeholderImage from '../assets/404.jpg'
import { MdDeleteForever } from "react-icons/md";

const BlogCard = ({blog, deletable, handleDelete}) => {
    const {cover_image, title, description, readable_publish_date, id} = blog;

    return (
		<div className="flex relative">

            			<Link to={`/blog/${id}` }className="max-w-sm mx-auto group hover:no-underline transition border-2 hover:scale-105 border-primary hover: border-secondary border-opacity-30 focus:no-underline dark:bg-gray-50 dark:bg-gray-50 dark:bg-gray-50 dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500 dark:bg-gray-500 dark:bg-gray-500 dark:bg-gray-500" src={cover_image || placeholderImage} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs dark:text-gray-600 dark:text-gray-600 dark:text-gray-600 dark:text-gray-600">{new Date(readable_publish_date).toLocaleDateString()}</span>
					<p>{description}</p>
				</div>
			</Link>
			{deletable && <div onClick={() => handleDelete(id)} className="absolute bg-primary p-3 rounded-full group hover:scale-105 -top-5 -right-5 cursor-pointer hover:bg-secondary"><MdDeleteForever size={20} className="text-secondary group-hover:text-primary"/></div>}
			</div>
    );
};

export default BlogCard;
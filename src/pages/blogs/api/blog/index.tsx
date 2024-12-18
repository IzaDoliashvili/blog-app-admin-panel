import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "../../../../supabase";

export type SingleBlog = {
    id: number; 
    created_at: string; 
    title_en: string | null; 
    title_ka: string | null; 
    description_en: string | null; 
    description_ka: string | null; 
    image_url: string | null;
    user_id: number | null; 
  };

export const getBlogList = async () => {
  try {
    const { data } = await supabase
      .from("blogs")
      .select("*")
      .throwOnError();

    return data as SingleBlog[];
  } catch (error) {
    console.error("Error fetching blog list:", error);
    throw error;
  }
};

export const getSingleBlog = async (id: string) => {
  try {
    const { data } = await supabase
      .from("blogs")
      .select("*")
      .eq("id", id)
      .single()
      .throwOnError();

    return data as SingleBlog;
  } catch (error) {
    console.error(`Error fetching blog with ID ${id}:`, error);
    throw error;
  }
};

export const updateBlog = async (
    id: string,
    payload: { title_en: string; description_en: string }
  ): Promise<void> => {
    const { error } = await supabase
      .from("blogs")
      .update(payload)
      .eq("id", id);
  
    if (error) {
      throw error; 
    }
  };
  

// export const useBlogList = () => {
//     return useQuery({
//       queryKey: ["blogs"], 
//       queryFn: getBlogList, 
//       staleTime: 1000 * 60 * 5, 
//       refetchOnWindowFocus: false, 
//       onError: (error: any) => {
//         console.error("Error fetching blog list:", error.message);
//       },
//     });
//   };

// export const useSingleBlog = (id: string) => {
//   return useQuery({
//     queryKey: ["blogs",id], 
//     queryFn: getSingleBlog(id), 
//     staleTime: 1000 * 60 * 5, 
//     refetchOnWindowFocus: false, 
//     onError: (error: any) => {
//     console.error("Error fetching blog list:", error.message);
//     }
// });
// };

// export const useUpdateBlog = () => {
//     const queryClient = useQueryClient();
  
//     return useMutation<
//       void,
//       Error, 
//       { id: string; payload: { title_en: string; descriptiom_en: string } } 
//     >(
//       async ({ id, payload }) => {
//         return await updateBlog(id, payload); 
//       },
//       {
//         onSuccess: () => {
//           queryClient.invalidateQueries(["blogs"]); 
//           console.log("Blog updated successfully!");
//         },
//         onError: (error: any) => {
//           console.error("Error updating blog:", error.message);
//         },
//       }
//     );
//   };
  
  


  






// export const updateBlog = (
//   id: string,
//   payload: { title_en: string; title_ka: string },
// ) => {
//   return supabase.from("blogs")
//   .select("*").then(id, { ...payload });
// };

// export const getSingleBlog = (id: string) => {
//   return supabase.from("blogs")
//   .select("*").then.getBlogById(id).then((res) => {
//     return res.data;
//   });
// };


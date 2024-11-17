import { useForm } from "react-hook-form";
import { USER_UPDATE_QUERY } from "../../graphql/queries";
import { client } from "../..";
import { removeTypename } from "../../graphql/utiles";

export default function Modal({ data, onClose }) {
  console.log(data);
  const { register, handleSubmit } = useForm({
    defaultValues: data,
  });

  const onSubmit = async (updatedData) => {
    console.log("Updated Data:", updatedData);
    const cleanedData = removeTypename(updatedData.user);
    try {
      const response = await client.mutate({
        mutation: USER_UPDATE_QUERY,
        variables: {
          id: "1",
          updatedUserData: cleanedData,
        },
      });
      console.log("User updated successfully:", response.data);
      onClose();
    } catch (err) {
      console.error("Error updating user:", err);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-h-[90vh] overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">Edit Card</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium">
              National ID Number
            </label>
            <input
              {...register("user.nationalId.idNumber")}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">
              National ID Expiry Date
            </label>
            <input
              {...register("user.nationalId.expiryDate")}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Title</label>
            <input
              {...register("user.title")}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">First Name</label>
            <input
              {...register("user.firstName")}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Father Name</label>
            <input
              {...register("user.fatherName")}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">
              Grand Father Name
            </label>
            <input
              {...register("user.grandfatherName")}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Family Name</label>
            <input
              {...register("user.familyName")}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">الأسم الأول</label>
            <input
              {...register("user.localizedName.firstNameArab")}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">اسم الأب</label>
            <input
              {...register("user.localizedName.familyNameArab")}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">اسم الجد</label>
            <input
              {...register("user.localizedName.familyNameArab")}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">
              اللقب / اسم العائلة
            </label>
            <input
              {...register("user.localizedName.familyNameArab")}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Date of Birth</label>
            <input
              {...register("user.dateOfBirth")}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Gender</label>
            <input
              {...register("user.gender")}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Nationality</label>
            <input
              {...register("user.nationality")}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">
              Additional Nationality
            </label>
            <input
              {...register("user.additionalNationality")}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Passport No.</label>
            <input
              {...register("user.passportNo")}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">
              Passport Issue Date
            </label>
            <input
              {...register("user.passportIssueDate")}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">
              Passport Expiry Date
            </label>
            <input
              {...register("user.passportExpiryDate")}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Marital Status</label>
            <input
              {...register("user.maritalStatus.name")}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Dependencies</label>
            <input
              {...register("user.dependants")}
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-400 text-white rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

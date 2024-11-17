import { useState } from "react";
import Wrapper from "../layyout/wrapper";
import profilePic from "../images/profilePic.png";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import Card from "../components/Card/card";
import Button from "../components/Button/button";
import Modal from "../components/Modals/basicInfoModal";
import { USER_QUERY } from "../graphql/queries";
import { useQuery } from "@apollo/client";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("personal");
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userId = 1;
  const { data, loading, error } = useQuery(USER_QUERY, {
    variables: { userId },
  });
  console.log(data);

  const handleEdit = () => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading user data.</div>;
  return (
    <Wrapper>
      <div className="flex w-full gap-4 flex-col md:flex-row">
        <div className="w-full md:w-[20%]">
          <div className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-3">
            <div className="relative w-20 h-20 group hover:cursor-pointer">
              {/* Profile Picture */}
              <img
                src={profilePic}
                alt="John Smith"
                className="w-full h-full rounded-3xl"
              />

              {/* Camera Icon */}
              <CameraAltOutlinedIcon
                fontSize="large"
                className="absolute bottom-0 right-1 bg-gray-200 text-black p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 "
              />
            </div>
            <h1 className="text-2xl font-bold">
              {data.user.firstName} {data.user.fatherName}
            </h1>
            <p className="text-sm">Senior Product Manager</p>
            <div className="h-[1px] bg-[#ECEEF1] w-full"></div>
            <div className="flex gap-4 flex-col justify-start items-start p-3 w-full">
              <button
                onClick={() => setActiveTab("personal")}
                className={`p-2 rounded-lg w-full text-left ${
                  activeTab === "personal" ? "bg-[#ccdae6] text-[#0F6CBD]" : ""
                }`}
              >
                Personal Information
              </button>
              <button
                onClick={() => setActiveTab("financial")}
                className={`p-2 rounded-lg w-full text-left ${
                  activeTab === "financial" ? "bg-[#ccdae6] text-[#0F6CBD]" : ""
                }`}
              >
                Financial Information
              </button>
            </div>
          </div>
        </div>
        {/* Body */}
        <div className="w-full md:w-[80%] flex flex-col gap-4">
          {activeTab === "personal" && (
            <>
              <Card>
                <div className="w-full flex flex-row justify-between items-center">
                  <h1 className="font-bold text-[#151D48]">
                    Basic Information
                  </h1>

                  <button
                    className="bg-[#0F6CBD] px-8 py-1 rounded-lg text-white font-bold"
                    onClick={() => handleEdit()}
                  >
                    Edit
                  </button>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div>
                      <p className="text-sm text-[#737791] font-bold">
                        National ID Number
                      </p>
                      <h2 className="text-sm text-[#151D48]">
                        {data.user.nationalId.idNumber}
                      </h2>
                    </div>

                    <div>
                      <p className="text-sm text-[#737791] font-bold">
                        National ID Expiry Date
                      </p>
                      <h2 className="text-sm text-[#151D48]">
                        {data.user.nationalId.expiryDate}
                      </h2>
                    </div>

                    <div>
                      <p className="text-sm text-[#737791] font-bold">Title</p>
                      <h2 className="text-sm text-[#151D48]">
                        {data.user.title}
                      </h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div>
                      <p className="text-sm text-[#737791] font-bold">
                        First Name
                      </p>
                      <h2 className="text-sm text-[#151D48]">
                        {data.user.firstName}
                      </h2>
                    </div>
                    <div>
                      <p className="text-sm text-[#737791] font-bold">
                        Father Name
                      </p>
                      <h2 className="text-sm text-[#151D48]">
                        {data.user.fatherName}
                      </h2>
                    </div>
                    <div>
                      <p className="text-sm text-[#737791] font-bold">
                        Grand Father Name
                      </p>
                      <h2 className="text-sm text-[#151D48]">
                        {data.user.grandfatherName}
                      </h2>
                    </div>

                    <div>
                      <p className="text-sm text-[#737791] font-bold">
                        Family Name
                      </p>
                      <h2 className="text-sm text-[#151D48]">
                        {data.user.familyName}
                      </h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div>
                      <p className="text-sm text-[#737791] font-bold">
                        الأسم الأول
                      </p>
                      <h2 className="text-sm text-[#151D48]">
                        {data.user.localizedName.firstNameArab}
                      </h2>
                    </div>
                    <div>
                      <p className="text-sm text-[#737791] font-bold">
                        اسم الأب
                      </p>
                      <h2 className="text-sm text-[#151D48]">
                        {data.user.localizedName.familyNameArab}
                      </h2>
                    </div>
                    <div>
                      <p className="text-sm text-[#737791] font-bold">
                        اسم الجد
                      </p>
                      <h2 className="text-sm text-[#151D48]">
                        {data.user.localizedName.familyNameArab}
                      </h2>
                    </div>

                    <div>
                      <p className="text-sm text-[#737791] font-bold">
                        اللقب / اسم العائلة
                      </p>
                      <h2 className="text-sm text-[#151D48]">
                        {data.user.localizedName.familyNameArab}
                      </h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div>
                      <p className="text-sm text-[#737791] font-bold">
                        Date of Birth
                      </p>
                      <h2 className="text-sm text-[#151D48]">
                        {data.user.dateOfBirth}
                      </h2>
                    </div>
                    <div>
                      <p className="text-sm text-[#737791] font-bold">Gender</p>
                      <h2 className="text-sm text-[#151D48]">
                        {data.user.gender}
                      </h2>
                    </div>
                    <div>
                      <p className="text-sm text-[#737791] font-bold">
                        Nationality
                      </p>
                      <h2 className="text-sm text-[#151D48]">
                        {data.user.nationality}
                      </h2>
                    </div>

                    <div>
                      <p className="text-sm text-[#737791] font-bold">
                        Additional Nationality
                      </p>
                      <h2 className="text-sm text-[#151D48]">
                        {data.user.additionalNationality}
                      </h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div>
                      <p className="text-sm text-[#737791] font-bold">
                        Passport No.
                      </p>
                      <h2 className="text-sm text-[#151D48]">
                        {data.user.passportNo}
                      </h2>
                    </div>
                    <div>
                      <p className="text-sm text-[#737791] font-bold">
                        Passport Issue Date
                      </p>
                      <h2 className="text-sm text-[#151D48]">
                        {data.user.passportIssueDate}
                      </h2>
                    </div>
                    <div>
                      <p className="text-sm text-[#737791] font-bold">
                        Passport Expiry Date
                      </p>
                      <h2 className="text-sm text-[#151D48]">
                        {data.user.passportExpiryDate}
                      </h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div>
                      <p className="text-sm text-[#737791] font-bold">
                        Marital Status
                      </p>
                      <h2 className="text-sm text-[#151D48]">
                        {data.user.maritalStatus.name}
                      </h2>
                    </div>
                    <div>
                      <p className="text-sm text-[#737791] font-bold">
                        Dependencies
                      </p>
                      <h2 className="text-sm text-[#151D48]">
                        {data.user.dependants}
                      </h2>
                    </div>
                  </div>
                </div>
              </Card>
              {isModalOpen && modalData && (
                <Modal data={modalData} onClose={closeModal} />
              )}

              <Card>
                <div className="w-full flex flex-row justify-between items-center">
                  <h1 className="font-bold text-[#151D48]">
                    Contact Information
                  </h1>
                  <Button name="Edit" />
                </div>
                <div className="flex flex-col">
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
                    <div>
                      <p className="text-sm text-[#737791] font-bold">
                        Personal Email
                      </p>
                      <h2 className="text-sm text-[#151D48]">email</h2>
                    </div>

                    <div>
                      <p className="text-sm text-[#737791] font-bold">Mobile</p>
                      <h2 className="text-sm text-[#151D48]">mobile</h2>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="w-full flex flex-row justify-between items-center">
                  <h1 className="font-bold text-[#151D48]">
                    Emergency Contacts
                  </h1>
                  <Button name="Edit" />
                </div>
                <div className="flex flex-col">
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
                    <div>
                      <p className="text-sm text-[#737791] font-bold">
                        Emergency Contact Person Name
                      </p>
                      <h2 className="text-sm text-[#151D48]">
                        emergencyContactName
                      </h2>
                    </div>

                    <div>
                      <p className="text-sm text-[#737791] font-bold">
                        Emergency Relation
                      </p>
                      <h2 className="text-sm text-[#151D48]">
                        emergencyRelation
                      </h2>
                    </div>

                    <div>
                      <p className="text-sm text-[#737791] font-bold">
                        Emergency Phone
                      </p>
                      <h2 className="text-sm text-[#151D48]">emergencyPhone</h2>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="w-full flex flex-row justify-between items-center">
                  <h1 className="font-bold text-[#151D48]">Address Details</h1>
                  <Button name="Edit" />
                </div>
                <div className="flex flex-col">
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
                    <div>
                      <p className="text-sm text-[#737791] font-bold">
                        Country
                      </p>
                      <h2 className="text-sm text-[#151D48]">country</h2>
                    </div>

                    <div>
                      <p className="text-sm text-[#737791] font-bold">City</p>
                      <h2 className="text-sm text-[#151D48]">city</h2>
                    </div>

                    <div>
                      <p className="text-sm text-[#737791] font-bold">
                        Postal Code
                      </p>
                      <h2 className="text-sm text-[#151D48]">postalCode</h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
                    <div>
                      <p className="text-sm text-[#737791] font-bold">
                        Building
                      </p>
                      <h2 className="text-sm text-[#151D48]">building</h2>
                    </div>

                    <div>
                      <p className="text-sm text-[#737791] font-bold">Street</p>
                      <h2 className="text-sm text-[#151D48]">street</h2>
                    </div>

                    <div>
                      <p className="text-sm text-[#737791] font-bold">
                        Floor No.
                      </p>
                      <h2 className="text-sm text-[#151D48]">floorNo</h2>
                    </div>

                    <div>
                      <p className="text-sm text-[#737791] font-bold">
                        Apartment
                      </p>
                      <h2 className="text-sm text-[#151D48]">apartment</h2>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="w-full flex flex-row justify-between items-center">
                  <h1 className="font-bold text-[#151D48]">
                    Driving license Details
                  </h1>
                  <Button name="Edit" />
                </div>
                <div className="flex flex-col">
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
                    <div>
                      <p className="text-sm text-[#737791] font-bold">
                        Driving License
                      </p>
                      <h2 className="text-sm text-[#151D48]">drivingLicense</h2>
                    </div>

                    <div>
                      <p className="text-sm text-[#737791] font-bold">
                        Driving License Type
                      </p>
                      <h2 className="text-sm text-[#151D48]">
                        drivingLicenseType
                      </h2>
                    </div>

                    <div>
                      <p className="text-sm text-[#737791] font-bold">
                        Driving License Expiry Date
                      </p>
                      <h2 className="text-sm text-[#151D48]">
                        drivingLicenseExpiryDate
                      </h2>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="w-full flex flex-row justify-between items-center">
                  <h1 className="font-bold text-[#151D48]">Military Details</h1>
                  <Button name="Edit" />
                </div>
                <div className="flex flex-col">
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
                    <div>
                      <p className="text-sm text-[#737791] font-bold">
                        Require Travel Permit
                      </p>
                      <h2 className="text-sm text-[#151D48]">
                        requireTravelPermit
                      </h2>
                    </div>

                    <div>
                      <p className="text-sm text-[#737791] font-bold">
                        Military Status
                      </p>
                      <h2 className="text-sm text-[#151D48]">militaryStatus</h2>
                    </div>

                    <div>
                      <p className="text-sm text-[#737791] font-bold">
                        Document
                      </p>
                      <h2 className="text-sm text-[#151D48]">document</h2>
                    </div>
                  </div>
                </div>
              </Card>
            </>
          )}
          {activeTab === "financial" && (
            <Card>
              <div className="w-full flex flex-row justify-between items-center">
                <h1 className="font-bold text-[#151D48]">
                  Financial Information
                </h1>
                <Button name="Edit" />
              </div>
              <div className="flex flex-col">
                <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
                  <div>
                    <p className="text-sm text-[#737791] font-bold">
                      Bank Name
                    </p>
                    <h2 className="text-sm text-[#151D48]">bankName</h2>
                  </div>

                  <div>
                    <p className="text-sm text-[#737791] font-bold">IBAN</p>
                    <h2 className="text-sm text-[#151D48]">iban</h2>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

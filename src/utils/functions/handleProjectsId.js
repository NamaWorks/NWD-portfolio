export const handleProjectsId = (id)=>{
  return id.toLowerCase().replace(" ", "-").replace("'","").replace("@","at-") + "_pr-entry"
}
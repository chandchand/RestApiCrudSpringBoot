package com.belajarspring.candidatapp.controller;

import com.belajarspring.candidatapp.dao.CandidateDao;
import com.belajarspring.candidatapp.dto.SearchData;
import com.belajarspring.candidatapp.entity.Candidate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("/api/candidate")
public class CandidateController {

    @Autowired
    private CandidateDao candidateDao;

    @RequestMapping(method = RequestMethod.POST)
    public Candidate insert(@RequestBody Candidate candidate){
        return candidateDao.insert(candidate);
    }

    @RequestMapping(method = RequestMethod.GET)
    List<Candidate> findAll(){
        return candidateDao.findAll();
    }

//    @RequestMapping(method = RequestMethod.PUT, value = "/{id}")
//    List<Candidate> findAll() {}

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public boolean delete(@PathVariable Long id){
        return candidateDao.delete(id);
    }

//    @RequestMapping(method = RequestMethod.PUT, value = "/search")
//    public List<Candidate> search(@RequestBody Candidate candidate){
//        return candidateDao.findById(candidate.getId());
//    }
}
